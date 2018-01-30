# Toy Quiz Application

This repository features a toy quiz application. The application cycles through 5 questions recording whether or not the user entered the correct answer to the question. This application was created to highlight some and utilize some of the new es6 features.

## Specifications
This application uses npm to manage its packages. As such, one only needs the latest versions of node and npm to get started.
`node v9.4.0`
`npm v5.6.0`

## Instructions
1. Download or clone this repository from git
2. Install necessary packages by running `npm install` in the root directory
3. Build js bundle by running `npm run webpack`
4. Launch server by running `npm run start`
5. Got to localhost:8080 on your favorite browser and take the quiz. See how many you can get right!

## Goals
This applications main goal was to highlight and utilize some of the new es6 features. This applications did this by utilizing:

* es6 style imports
* es6 style classes
* es6 style syntax
* The creation of an es6 type generator function (although it did not use the actual generator function

(Because of the simplicity of the task, this application did not use the es6 arrow function)

## Final Thoughts
The task presented by this application was not meant to be complicated and indeed it was easily solved. Because data wasn't recieved asynchronously, the use of arrow functions and promises was altogether unecessary. I did however opt to create my own version of a generator function for two reasons:
1. To provide myself with greater understanding for what is going on under the hood of an es6 generator function.
2. To customize the function for greater usability in my application. (I forsee this will be needed in the future since I currently believe es6 generator functions to be too rigid in its returns).

Overall I thought this application was fun to make as it did illuminate some small gotcha's with es6 (such as `export default class` vs `export class`). I hope you learn a thing or to from the quiz!

TODO:: Add show answers button!!
