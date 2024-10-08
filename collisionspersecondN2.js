// Constants
const k_B = 1.38e-23; // Boltzmann constant in J/K
const T = 288; // Temperature at sea level in Kelvin
const d = 3.7e-10; // Diameter of a nitrogen molecule in meters
const P = 101325; // Pressure at sea level in Pascals
const m = 4.65e-26; // Mass of a nitrogen molecule in kg
const pi = Math.PI; // Value of Pi

// Step 1: Mean free path calculation
function meanFreePath(k_B, T, d, P) {
    return (k_B * T) / (Math.sqrt(2) * pi * Math.pow(d, 2) * P);
}

// Step 2: Thermal speed calculation
function thermalSpeed(k_B, T, m) {
    return Math.sqrt((8 * k_B * T) / (pi * m));
}

// Step 3: Number of collisions per second
function numberOfCollisions(v_avg, lambda) {
    return v_avg / lambda;
}

// Calculate the mean free path (lambda)
const lambda = meanFreePath(k_B, T, d, P);

// Calculate the average thermal speed (v_avg)
const v_avg = thermalSpeed(k_B, T, m);

// Calculate the number of collisions per second (Z)
const collisionsPerSecond = numberOfCollisions(v_avg, lambda);

// Output the results
console.log(`Mean Free Path (λ): ${lambda.toFixed(8)} meters`);
console.log(`Average Thermal Speed (v_avg): ${v_avg.toFixed(2)} meters/second`);
console.log(`Number of Collisions per Second: ${collisionsPerSecond.toExponential(2)} collisions/second`);
