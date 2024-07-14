import { Selectors } from "../../../common/regex";

export const passwordValidator = (input: string): string | null => {
  if (Selectors.isPassword.test(input)) {
    return null;
  }

  return "Please enter a valid password";
};
