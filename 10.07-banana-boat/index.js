/**
 * Computes one step of the transitive Hull of the given adjacency matrix.
 *
 * @param Boolean[][] adjMatrix the crossroads matrix
 * @return Boolean[][] the transformed adjacency matrix.
 */
function transHullOneStep(adjMatrix) {
    // Optional: validate input
    for (let i = 0; i < adjMatrix.length; i++) {
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] != adjMatrix[j][i]) {
                throw new Error("Adjacency matrix not symmetric");
            }
        }
    }

    // Copy source Array
    let output = adjMatrix.map(row => row.slice())

    // Perform one step of transitive hull finding
    for (let i = 0; i < adjMatrix.length; i++) {
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j]) {
                continue;
            }

            for (let k = 0; k < adjMatrix[i].length; k++) {
                if (!adjMatrix[i][j] || i == j) {
                    continue;
                }

                output[i][j] = output[i][j] || adjMatrix[k][j];
                output[j][i] = output[i][j] || adjMatrix[k][j];
            }
        }
    }

    return output;
}

/**
 * Distributes the given banana boats according to the rules of the exercise.
 *
 * @param Boolean[][] adjMatrix the adjacency Matrix
 * @param Number[] boatCounts the amount of banana boats per crossroad
 * @return Number[][] the distributed boats.
 */
function distributeBoats(adjMatrix, boatCounts) {
    let transMatrix = transHullOneStep(adjMatrix);

    // Initialize empty output array
    let output = [];
    for (let i = 0; i < adjMatrix.length; i++) {
        output[i] = [];
        for (let j = 0; j < adjMatrix.length; j++) {
            output[i][j] = 0;
        }
    }

    // Distribute the banana boats
    for (let i = 0; i < transMatrix.length; i++) {
        let boatCount = boatCounts[i];
        for (let j = i + 1; j < transMatrix[i].length && boatCount > 0; j++) {
            output[i][j]++;
            output[j][i]++;
            boatCount--;
        }

        if (boatCount > 0) {
            throw new Error("Too many boats! Cannot distribute!");
        }
    }

    return output;
}

let arr = [
    [false, true, false, false],
    [true, false, true, false],
    [false, true, false, false],
    [false, false, false, false]
];
let boats = [2, 1, 0, 0];

console.log(distributeBoats(arr, boats));
