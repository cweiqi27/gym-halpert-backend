import type { BodyPartDocument } from "../model/bodyPart.model";
import BodyPart from "../model/bodyPart.model";

export const createBodyPart = (
  input: Omit<BodyPartDocument, "createdAt" | "updatedAt">
) => {
  try {
    const bodyPart = BodyPart.create(input);
    return bodyPart;
  } catch (e: any) {
    throw new Error(e);
  }
};
