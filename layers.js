// Constants
// Constants
const H = 12000; // Scale height in meters
const initialThickness = 100; // Initial layer thickness (first layer is 100 meters)
const maxAltitude = 12000; // Maximum accumulated height (12,000 meters)

// Function to calculate the thickness of the next layer
function calculateNextLayerThickness(h2, initialThickness, H) {
    return initialThickness * Math.exp(h2 / H);
}

// Initialize arrays to store the results
let layerStartPoints = [0]; // First layer starts at 0 meters
let layerThicknesses = [initialThickness]; // First layer thickness is 100 meters
let accumulatedHeight = initialThickness; // Start with first layer's height

// Calculate the thickness for each layer until accumulated height reaches 12,000 meters
while (accumulatedHeight < maxAltitude) {
    let h2 = layerStartPoints[layerStartPoints.length - 1] + layerThicknesses[layerThicknesses.length - 1]; // Starting altitude of the next layer
    let nextThickness = calculateNextLayerThickness(h2, initialThickness, H); // Calculate the next layer thickness
    
    // Check if adding the next layer will exceed the max altitude
    if (accumulatedHeight + nextThickness > maxAltitude) {
        nextThickness = maxAltitude - accumulatedHeight; // Adjust thickness to exactly reach maxAltitude
    }

    layerStartPoints.push(h2); // Append the start point for the next layer
    layerThicknesses.push(nextThickness); // Append the calculated thickness for the next layer
    accumulatedHeight += nextThickness; // Update the accumulated height
}

// Output results
console.log("Layer Start Point (m) | Layer Thickness (m)");
for (let i = 0; i < layerStartPoints.length; i++) {
    console.log(`layer number ${i} | ${layerStartPoints[i].toFixed(2)} | ${layerThicknesses[i].toFixed(2)}`);
}
