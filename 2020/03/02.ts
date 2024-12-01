export {};

const fileContents = Deno.readTextFileSync('./input');
const map = fileContents.split('\n');
const elementsPerRow = map[0].length;

const totalCount = ( RIGHT_SPEED: number, DOWN_SPEED: number,) => {
  let treeCounter = 0;
  let x = 0;
  const detectCollision = (x: number, y: number) => {
    if (map[y][x % elementsPerRow] == '#') {
      treeCounter++;
    }
  };

  for (var y = 0; y < map.length; y = y + DOWN_SPEED, x = x + RIGHT_SPEED) {
    detectCollision(x, y);
  }

  return treeCounter;
};

console.log(
  'treeCounter',
  totalCount(1, 1) *
    totalCount(3, 1) *
    totalCount(5, 1) *
    totalCount(7, 1) *
    totalCount(1, 2)
);
