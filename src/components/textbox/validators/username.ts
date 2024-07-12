import { ErrorStrings } from "../../../common/errorStrings";
import { Selectors } from "../../../common/regex";

export const usernameValidator = (input: string): string | null => {
  if (input.trim().length == 0) {
    return ErrorStrings.emptyField;
  }

  if (input.length > 24) {
    return "Username cannot exceed 24 characters";
  }

  if (Selectors.startsWithSpecialCharacter.test(input)) {
    return "Username cannot start with special character";
  }

  if (Selectors.endsInSpecialCharacter.test(input)) {
    return "Username cannot end in special character";
  }

  if (Selectors.repeatingSpecialCharacters.test(input)) {
    return "Username cannot have repeating special characters";
  }

  if (Selectors.isUsername.test(input)) {
    return null;
  }

  return ErrorStrings.usernameInvalidCharacters;
};
