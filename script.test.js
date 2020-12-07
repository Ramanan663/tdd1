const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("./script.js");

//1

test("Is not equal to Null", () => {
    expect(isNotNull("")).toBe(true);
});

test("Less than 9 characters", () => {
    expect(hasRightLength("abcdefgh")).toBe(true);
});

test("Has 1 or more upperCase characters", () => {
    expect(hasUpperCaseCharacter("Abcdefgh")).toBe(true);
});

test("Has 1 or more lowerCase characters", () => {
    expect(hasLowerCaseCharacter("aBCDEFGH")).toBe(true);
});

test("Has 1 or more numbers", () => {
    expect(hasDigit("1234a5A6")).toBe(true);
});

test("Password is only valid when the previous tests return 3 times true", () => {
    expect(minimumConditionsReached([true, true, true])).toBe(true);
});

test("Password is only valid when the 4th condition is true", () => {
    expect(minimumConditionsReached([true, true, true, true])).toBe(true);
});

describe("verifyPassword", () => {
    test("can't be null", () => {
        expect(verifyPassword("1")).not.toBe(true);
    });

    test("Has more than one number", () => {
        expect(verifyPassword("2")).toBe(false);
    });

    test("Has only numbers", () => {
        expect(verifyPassword("12345678")).toBe(false);
    });

    test("Has only uppercase characters", () => {
        expect(verifyPassword("ABCdefgh")).toBe(true);
    });

    test("Has only lowercase characters", () => {
        expect(verifyPassword("abcDEFGH")).toBe(true);
    });

    test("Has only lowercase characters, but too many characters", () => {
        expect(verifyPassword("abcdefghi")).toBe(false);
    });

    test("Has uppercase and lowercase characters, but too many characters", () => {
        expect(verifyPassword("AbCdEfGh")).toBe(true);
    });

    test("Correct password", () => {
        expect(verifyPassword("Ab12cD34")).toBe(true);
    });
});