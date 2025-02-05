import canvasSketch from "canvas-sketch";
import { lerp } from "canvas-sketch-util/math";
import random from "canvas-sketch-util/random";
import palettes from "nice-color-palettes";

random.setSeed(random.getRandomSeed());
// In dev tools in console setting check "Preserve log" to see all the previous seeds
console.log("seed:", random.getSeed());

const settings = {
  // suffix: random.getSeed(),
  dimensions: [2048, 2048],
};

const background = "white";
const margin = 400;
const character = "=";

const sketch = () => {
  const colorCount = random.rangeFloor(2, 6);
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);

  const createGrid = () => {
    const points = [];
    const count = 60;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        const radius = Math.abs(random.noise2D(u, v)) * 0.075;
        points.push({
          radius,
          position: [u, v],
          color: random.pick(palette),
          rotation: random.noise2D(u, v) * Math.PI * 0.5,
        });
      }
    }
    return points;
  };

  let points = createGrid().filter(() => random.value() > 0.5);
  points = random.shuffle(points);

  return ({ context, width, height }) => {
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    points.forEach((data) => {
      const { position, radius, color, rotation } = data;
      const [u, v] = position;

      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.save();
      context.fillStyle = color;
      context.font = `${radius * width}px "Roboto"`;
      context.translate(x, y);
      context.rotate(rotation);
      context.fillText(character, 0, 0);

      context.restore();
    });
  };
};

canvasSketch(sketch, settings);
