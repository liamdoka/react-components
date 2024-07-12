export class Selectors {
  public static lettersOnly: RegExp = new RegExp("^[a-zA-Z]+$");
  public static lettersAndNumbers: RegExp = new RegExp("^[a-zA-Z0-9]+$");
  public static isUsername: RegExp = new RegExp(
    "^([a-zA-Z0-9]+)([._-]\\1{0,1}[a-zA-Z0-9]+)*$",
  );
  public static endsInSpecialCharacter: RegExp = new RegExp("([-._])$");
  public static startsWithSpecialCharacter: RegExp = new RegExp("^([-._])");
  public static repeatingSpecialCharacters: RegExp = new RegExp("([-._]{2,})");
  public static isPassword: RegExp = new RegExp(
    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  );
}
