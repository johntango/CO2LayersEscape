// Constants
const meanFreePath = 2; // Mean free path in meters
const distanceToEscape = 100; // Distance to escape in meters
const reEmissionTime = 10 * Math.pow(10, -5); // Absorption to re-emission time in seconds

// Calculate the number of steps in the random walk
const numberOfSteps = Math.pow(distanceToEscape / meanFreePath, 2);

// Calculate the total time to escape
const totalTime = numberOfSteps * reEmissionTime;

// Output the result
console.log(`Total time for photon to escape 100 meters: ${totalTime.toFixed(2)} seconds`);
