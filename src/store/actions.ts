import { DEFAULT } from "./types";

export const userUpdate = (user: string) => ({
  type: DEFAULT,
  payload: user,
});