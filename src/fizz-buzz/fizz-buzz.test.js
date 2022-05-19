import fizzBuzz from "./fizz-buzz";

describe("fizz-buzz", () => {
  it("should exist - basic test setup", () => {
    // Arrange
    const subject = fizzBuzz;

    // Act
    // const result = subject();

    // Assert
    expect(subject).toBeDefined();
  });
  it("should return 1 when passed 1", () => {
    // Arrange
    const subject = fizzBuzz;

    // Act
    const result = subject(1);

    // Assert
    expect(result).toBe(1);
  });
  it("should return 2 when passed 2", () => {
    // Arrange
    const subject = fizzBuzz;

    // Act
    const result = subject(2);

    // Assert
    expect(result).toBe(2);
  });
  it("should return Fizz when passed 3", () => {
    // Arrange
    const subject = fizzBuzz;

    // Act
    const result = subject(3);

    // Assert
    expect(result).toBe("Fizz");
  });
});
