export {};
const fileContents = Deno.readTextFile('./input');

fileContents.then((text) => {
  let counter2 = 0;
  text.split('\n').map((item) => {
    if (evaluate(item)) {
      counter2++;
    }
  });

  console.log(counter2);
});

const evaluate = (input: string) => {
  const str = input;

  const words = str.split('-');
  const lowerBound = words[0];
  const upperBound = words[1].split(' ')[0];
  const searchedChar = words[1].split(' ')[1].split(':')[0];
  const password = words[1].split(' ')[2];

  const countChars = (
    lower: number,
    upper: number,
    char: string,
    password: string
  ) => {
    let counter = 0;
    password.split('').map((item) => {
      if (item == char) {
        counter = counter + 1;
      }
    });

    return lower <= counter && counter <= upper;
  };

  const result = countChars(+lowerBound, +upperBound, searchedChar, password);
  return result;
};
