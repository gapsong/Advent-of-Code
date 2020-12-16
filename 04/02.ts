export {};

const fileContents = Deno.readTextFileSync('./input');

const passports = fileContents.split('\n\n');

const toBoolNumber = (value: number) => value >= 0;

const validNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const validChars = [...validNumbers, 'a', 'b', 'c', 'd', 'e', 'f'];
const validEyeClr = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

const validateAttributes = (attribute: string): boolean => {
    const vals = attribute.split(':');

    const key = vals[0];
    const value = vals[1];

    switch (key) {
        case 'cid': {
            return true;
        }
        case 'byr': {
            console.log('byr', value, 1920 <= parseInt(value) && parseInt(value) <= 2002);
            return 1920 <= parseInt(value) && parseInt(value) <= 2002;
        }

        case 'iyr': {
            console.log('iyr', value, 2010 <= parseInt(value) && parseInt(value) <= 2020);

            return 2010 <= parseInt(value) && parseInt(value) <= 2020;
        }

        case 'eyr': {
            console.log('eyr', value, 2020 <= parseInt(value) && parseInt(value) <= 2030);

            return 2020 <= parseInt(value) && parseInt(value) <= 2030;
        }

        case 'hcl': {
            const valueAtt = value.split('');
            if (value.split('')[0] == '#' && value.split('').length == 7) {
                const temp = valueAtt.splice(1, valueAtt.length).reduce((acc, item) => {
                    return acc && validChars.includes(`${item}`);
                }, true);
                console.log('hcl', value, temp);

                return temp;
            }
        }

        case 'ecl': {
            console.log('ecl', value, validEyeClr.includes(value));

            return validEyeClr.includes(value);
        }

        case 'pid': {
            const expoldedValue = value.split('');
            const isNumbers = expoldedValue.reduce((acc, item) => {
                return acc && validNumbers.includes(`${item}`);
            }, true);

            console.log('pid', value, value.split('').length == 9 && isNumbers);
            return value.split('').length == 9 && isNumbers;
        }

        case 'hgt': {
            if (value.search('cm') != -1) {
                const height = value.split('cm')[0];
                return 150 <= Number(height) && Number(height) <= 193;
            }
            if (value.search('in') != -1) {
                const height = value.split('in')[0];
                console.log('in', height, 59 <= Number(height) && Number(height) <= 76);
                return 59 <= Number(height) && Number(height) <= 76;
            }
        }
    }
    return false;
};

const validPassports = passports.filter((passport) => {
    const passportAttributes = passport.split(/ |\n/).map(validateAttributes);
    console.log(passportAttributes);
    const temp = passportAttributes.reduce((acc, item) => {
        return acc && item;
    }, true);

    console.log(temp);
    return temp;
});

console.log(validPassports.length);
