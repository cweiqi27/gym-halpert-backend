import { access, writeFile } from "fs";
import logger from "../utils/logger";
import { constants } from "fs/promises";
import type { FileType } from "../utils/file";
import { FileTypeArr, getFileNameAndPath } from "../utils/file";

const type = process.argv[2];
const name = process.argv[3];
const nameCapitalised = name.charAt(0).toUpperCase() + name.slice(1);

const controllerSample = `import type { Request, Response } from "express";
// import { create${nameCapitalised} } from "../service/${name}.service.ts";
// import {Create${nameCapitalised}Input} from "../schema/${name}.schema.ts";

export const create${nameCapitalised}Handler = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    // zod schema: 
    // Create${nameCapitalised}Input["body"]
  >,
  res: Response
) => {
  try {
    // const ${name} = await create${nameCapitalised}(req.body);
    // return res.json(${name});
  } catch (e: any) {
    return res.status(400).send(e);
  }
};

// export const get${nameCapitalised}Handler...

// export const update${nameCapitalised}Handler...

// export const delete${nameCapitalised}Handler...
`;

const serviceSample = `import type { ${nameCapitalised}Document } from "../model/${name}.model";
import ${nameCapitalised} from "../model/${name}.model";

export const create${nameCapitalised} = (
  input: Omit<${nameCapitalised}Document, "createdAt" | "updatedAt">
) => {
  try {
    const ${name} = ${nameCapitalised}.create(input);
    return ${name};
  } catch (e: any) {
    throw new Error(e);
  }
};

// export const get${nameCapitalised}

// export const update${nameCapitalised}

// export const delete${nameCapitalised}
`;

const modelSample = `import { Schema, model } from "mongoose";
import type { Document } from "mongoose";

export interface ${nameCapitalised}Document extends Partial<Document> {
  // name: string;
}

const ${name}Schema = new Schema<${nameCapitalised}Document>({
  // name: String,
});

const ${nameCapitalised}= model("${nameCapitalised}", ${name}Schema);

export default ${nameCapitalised};
`;

const schemaSample = `import { z } from "zod";

export const create${nameCapitalised}Schema = z.object({
  body: z.object({
    // name: z.string(),
  }),
});

export type Create${nameCapitalised}Input = z.TypeOf<typeof create${nameCapitalised}Schema>;
`;

const generateFile = (fileType: FileType): Promise<void> => {
  const sample =
    fileType === "controller"
      ? controllerSample
      : fileType === "model"
      ? modelSample
      : fileType === "schema"
      ? schemaSample
      : serviceSample;

  const { fileName, filePath } = getFileNameAndPath(fileType, name);

  return new Promise((resolve, reject) => {
    access(filePath, constants.F_OK, (e) => {
      if (e) {
        writeFile(filePath, sample, (e) => {
          e ? reject(e) : resolve();
        });
      } else {
        logger.warn(`${fileName} already exist.`);
      }
    });
  });
};

const generateFiles = async (fileType: FileType | "entity") => {
  if (fileType !== "entity") {
    try {
      generateFile(fileType);
      logger.info("File created successfully.");
    } catch (e) {
      logger.error(e);
    }
  } else {
    try {
      const promises = FileTypeArr.map((fileType) => generateFile(fileType));
      await Promise.all(promises);
      logger.info("Files created successfully");
    } catch (e) {
      logger.error(e);
    }
  }
};

if (
  type === "controller" ||
  type === "service" ||
  type === "model" ||
  type === "schema" ||
  type === "entity"
)
  generateFiles(type);
else
  logger.error(`
${type} is not a valid command.
Try:
- controller
- service
- model
- schema
- entity
`);
