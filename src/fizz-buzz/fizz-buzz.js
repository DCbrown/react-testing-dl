const fizzBuzz = (value) => {
  if (value % 3 === 0) {
    return "Fizz";
  }

  if (value % 5 === 0) {
    return "Buzz";
  }

  return value;
};

export default fizzBuzz;
