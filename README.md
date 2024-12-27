# GenArt Project

This project is a generative art project that uses the `canvas-sketch` framework to create and display artwork.

## Requirements

To run this project, you need to have `canvas-sketch` installed. You can install it globally using npm:

```sh
npm install canvas-sketch-cli -g
```

## Running the Project

To run the project, use the following command:

```sh
canvas-sketch ./filename --open
```

Replace `./filename` with the path to the sketch file.

## Sketch Files

### sketch.js

The `sketch.js` file generates an abstract artwork using a grid of randomly distributed and rotated "█" glyphs. Each glyph varies in size, color, and rotation, influenced by Perlin noise. The composition features clusters of glyphs on a white background, creating an organic, textured appearance. The color palette is selected randomly from `nice-color-palettes`.

### webgl.js

The webgl.js file generates a 3D composition of colorful, randomly positioned and scaled cubes rendered using Three.js. The cubes are drawn from a randomly selected color palette and arranged in a dynamic, abstract style. Ambient and directional lighting are used to enhance depth and create a visually appealing geometric scene. The composition rotates interactively, offering an engaging 3D viewing experience.

## License

This project is licensed under the ISC License.
