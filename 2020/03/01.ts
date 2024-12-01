export {};

const fileContents = Deno.readTextFileSync('./input');
const map = fileContents.split('\n');
const elementsPerRow = map[0].length;

let treeCounter = 0;
let x = 3;
const detectCollision = (x: number, y: number) => {
  if (map[y][x % elementsPerRow] == '#') {
    treeCounter++
  }
};

for (var y = 1; y < map.length; y++, x = x + 3) {
  detectCollision(x, y);
}

console.log('treeCounter', treeCounter);
