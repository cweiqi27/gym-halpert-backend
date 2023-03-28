import type { UserDocument } from "../model/user.model";
import User from "../model/user.model";

export const createUser = async (
  input: Omit<UserDocument, "createdAt" | "updatedAt">
) => {
  try {
    return await User.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
};
