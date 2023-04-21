import { access, constants, unlink } from "fs";
import type { FileType } from "../utils/file";
import { FileTypeArr } from "../utils/file";
import { getFileNameAndPath } from "../utils/file";
import logger from "../utils/logger";

const type = process.argv[2];
const name = process.argv[3];

const deleteFile = (fileType: FileType): Promise<void> => {
  const { fileName, filePath } = getFileNameAndPath(fileType, name);

  return new Promise((resolve, reject) => {
    access(filePath, constants.F_OK, (e) => {
      if (e) {
        logger.warn(`${fileName} does not exist.`);
      } else {
        unlink(filePath, (e) => {
          e ? reject(e) : resolve();
        });
      }
    });
  });
};

const deleteFiles = async (fileType: FileType | "entity") => {
  if (fileType !== "entity") {
    try {
      deleteFile(fileType);
    } catch (e) {
      logger.error(e);
    }
  } else {
    try {
      const promises = FileTypeArr.map((fileType) => deleteFile(fileType));
      await Promise.all(promises);
      logger.info("Files deleted successfully.");
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
) {
  deleteFiles(type);
}
