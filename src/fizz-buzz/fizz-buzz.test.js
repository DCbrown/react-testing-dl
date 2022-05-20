import fizzBuzz from "./fizz-buzz";

describe("fizz-buzz", () => {
  // Arrange
  const subject = fizzBuzz;

  it("should exist - basic test setup", () => {
    // Act
    // const result = subject();

    // Assert
    expect(subject).toBeDefined();
  });
  it("should return 1 when passed 1", () => {
    // Act
    const result = subject(1);

    // Assert
    expect(result).toBe(1);
  });
  it("should return Fizz when passed 3", () => {
    expect(subject(3)).toBe("Fizz");
  });
  it("should return Buzz when passed 5", () => {
    expect(subject(5)).toBe("Buzz");
  });
  it("should return Fizz when passed 6", () => {
    expect(subject(6)).toBe("Fizz");
  });
  it("should return Buzz when passed 10", () => {
    expect(subject(10)).toBe("Buzz");
  });
});
