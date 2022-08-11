# syncfusion-ts-sample

## Pre-requirements
**node**: Must be Above 10.17.0 and below 12.0.0

## Adding the code to sample
step 1: Add the `html` content in the `scr/app/index.html` file.

step 2: Add the `ts` content in the `src/app/index.ts` file.

step 3: If you have any data to imported in to the `index.ts` file, add it in the `src/app/data.ts` file.

## Intastalling the packages
Add the packages you want in the `Package.json` file.

Then use the command `npm install` or `npm i` to install the packages.

## Bunduling the files
step 1: After finishing the above procedures, use the command `npm run build` to bundle the files which are in the `src` and `node_modules` folders.

step 2: After running the command mentioned in the step 1, you can find a file named `bundle.js` in the `dist/app/` folder.

step 3: Move this `bundle.js` file from  `dist/app` to `src/app`.

step 4: Then use the below script to refer the `bundle.js` file in the `src/app/index.html` file that you have just moved to `src/app` folder.

        <script src="./bundle.js"></script>

## Running the sample
Use the command `gulp start` to run the sample.
