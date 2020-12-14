export {};

const fileContents = Deno.readTextFileSync('./input');

const passports = fileContents.split('\n\n');

const toBoolNumber = (value: number) => value >= 0;

const validPassports = passports.filter((passport) => {
  return (
    toBoolNumber(passport.search('byr:')) &&
    toBoolNumber(passport.search('iyr:')) &&
    toBoolNumber(passport.search('eyr:')) &&
    toBoolNumber(passport.search('hgt:')) &&
    toBoolNumber(passport.search('hcl:')) &&
    toBoolNumber(passport.search('ecl:')) &&
    toBoolNumber(passport.search('pid:'))
  );
});

console.log(validPassports.length);