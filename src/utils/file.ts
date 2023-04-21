export const FileTypeArr = [
  "controller",
  "service",
  "model",
  "schema",
] as const;
export type FileType = (typeof FileTypeArr)[number];

export const getFileNameAndPath = (fileType: FileType, name: string) => {
  const fileName = `${name}.${fileType}.ts`;
  const filePath = `src/${fileType}/${fileName}`;
  return { fileName, filePath };
};
