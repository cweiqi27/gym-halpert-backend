import User from "../model/user.model";

export const createUser = async (
  userInput: string,
  createdAt: number,
  updatedAt: number
) => {
  try {
    const user = await User.create({
      userId: userInput,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    });
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
};
