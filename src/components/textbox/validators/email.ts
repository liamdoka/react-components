import { Selectors } from "../../../common/regex";

export const emailValidator = (input: string): string | null => {
  if (Selectors.isEmail.test(input)) {
    return null;
  }

  return "Please enter a valid email address";
};
