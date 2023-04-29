
import type { SetDocument } from "../model/set.model";
import Set from "../model/set.model";

export const createSet = (
  input: Omit<SetDocument, "createdAt" | "updatedAt">
) => {
  try {
    const set = Set.create(input);
    return set;
  } catch (e: any) {
    throw new Error(e);
  }
};
