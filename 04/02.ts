export {};

const fileContents = Deno.readTextFileSync('./input');

const passports = fileContents.split('\n\n');

const toBoolNumber = (value: number) => value >= 0;

const validChars = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

const validateAttributes = (attribute: string): boolean => {
  const vals = attribute.split(':');

  const key = vals[0];
  const value = vals[1];

  if (key == 'byr') {
    return 1920 <= parseInt(value) && parseInt(value) <= 2002;
  }

  if (key == 'iyr') {
    return 2010 <= parseInt(value) && parseInt(value) <= 2020;
  }

  if (key == 'eyr') {
    return 2020 <= parseInt(value) && parseInt(value) <= 2030;
  }

  if (key == 'hcl') {
    if (value.split('')[0] == '#' && value.split('').length == 7) {
      let acc = true
      value.split('').map((item) => {
        if(!acc){
          console.log(item)
        }
        acc = acc && validChars.includes(item);
      }, true);

      return acc
    }
  }

  return false
};

const validPassports = passports.filter((passport) => {
  const passportAttributes = passport.split(/ |\n/).map(validateAttributes);
});

console.log(validateAttributes('hcl: #12345f'));
