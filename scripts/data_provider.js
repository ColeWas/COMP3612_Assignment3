/*Data Provider*/
const path = require('path'); 
const fs = require('fs'); 
// change data source to json file containing drivers
let jsonPath = path.join(__dirname, '../data', 'drivers.json'); 
let jsonData = fs.readFileSync(jsonPath, 'utf8'); 
const driverData = JSON.parse(jsonData); 
// change data source to json file containing races
    jsonPath = path.join(__dirname, '../data', 'races.json'); 
    jsonData = fs.readFileSync(jsonPath, 'utf8'); 
const raceData = JSON.parse(jsonData); 
// change data source to json file containing results
jsonPath = path.join(__dirname, '../data', 'results.json'); 
jsonData = fs.readFileSync(jsonPath, 'utf8'); 
const resultData = JSON.parse(jsonData);
// change data source to json file containing constructors
jsonPath = path.join(__dirname, '../data', 'constructors.json'); 
jsonData = fs.readFileSync(jsonPath, 'utf8'); 
const constructorData = JSON.parse(jsonData); 
// change data source to json file containing circuits
jsonPath = path.join(__dirname, '../data', 'circuits.json'); 
jsonData = fs.readFileSync(jsonPath, 'utf8'); 
const circuitData = JSON.parse(jsonData); 

// q_2020 file
jsonPath = path.join(__dirname, '../data', 'q_2020.json');
jsonData = fs.readFileSync(jsonPath, 'utf8');
const q2020Data = JSON.parse(jsonData); 

// q_2021 file
jsonPath = path.join(__dirname, '../data', 'q_2021.json');
jsonData = fs.readFileSync(jsonPath, 'utf8');
const q2021Data = JSON.parse(jsonData); 

// q_2022 file
jsonPath = path.join(__dirname, '../data', 'q_2022.json');
jsonData = fs.readFileSync(jsonPath, 'utf8');
const q2022Data = JSON.parse(jsonData); 

// q_2023 file
jsonPath = path.join(__dirname, '../data', 'q_2023.json');
jsonData = fs.readFileSync(jsonPath, 'utf8');
const q2023Data = JSON.parse(jsonData); 

const qualifyingData = [...q2020Data, ...q2021Data, ...q2022Data, ...q2023Data];


module.exports = {drivers: driverData, races: raceData, results: resultData, constructors: constructorData, circuits: circuitData, qualifying: qualifyingData}; 

