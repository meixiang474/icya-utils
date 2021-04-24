import { isVoid } from "./isVoid";

export const resolveTime = (val: string) => {
  if (isVoid(val)) {
    return val;
  }
  return new Date(val);
};
