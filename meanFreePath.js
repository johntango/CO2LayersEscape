// Constants
const n0 = 2.5 * Math.pow(10, 25); // Number density of air molecules at sea level (molecules/m^3)
const ppm_CO2 = 800; // CO2 concentration in ppm
const sigma = Math.pow(10, -22); // Absorption cross-section of CO2 (m^2)

// Calculate number density of CO2 at sea level
const n_CO2 = n0 * (ppm_CO2 / Math.pow(10, 6)); // Number density of CO2 (molecules/m^3)

// Calculate mean free path
const meanFreePath = 1 / (n_CO2 * sigma);

// Output result
console.log(`Mean Free Path of a CO2-absorbed photon at sea level: ${meanFreePath.toFixed(2)} meters`);
// Re-Emission of photons occurs between 10-6 and 10-4 seconds after absorption. 
// Assuming re-radiation at a random directions how long will it take for a photon to escape past the first 100 meters of the atmosphere?
// Assume mean free path is 1m and the speed of light is 3 x 10^8 m/s


