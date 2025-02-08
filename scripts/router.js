/*Router*/
const express = require('express');
const router = express.Router();
const { drivers, races, results, constructors, circuits, qualifying } = require('./data_provider.js');

// Utility function to send a Not Found response had a bit of help for this from here: https://expressjs.com/en/guide/error-handling.html
const notFoundResponse = (res, message) => res.status(404).json({ error: message });

// /api/circuits - Returns all circuits
router.get('/api/circuits', (req, res) => {
  res.json(circuits);
});

// /api/circuits/id - Returns single circuit by circuitId
router.get('/api/circuits/:id', (req, res) => {
  const circuit = circuits.find(c => c.circuitId == req.params.id);
  circuit ? res.json(circuit) : notFoundResponse(res, 'Circuit not found');
});

// /api/constructors - Returns all constructors
router.get('/api/constructors', (req, res) => {
  res.json(constructors);
});

// /api/constructors/ref - Returns single constructor by constructorRef
router.get('/api/constructors/:ref', (req, res) => {

  const constructor = constructors.find(c => c.constructorRef === req.params.ref.toLowerCase());
  constructor ? res.json(constructor) : notFoundResponse(res, 'Constructor not found');
});

// /api/constructorResults/mclaren/2023 - Race results for a constructor and season
router.get('/api/constructorResults/:ref/:year', (req, res) => {
  const filteredResults = results.filter(r => r.constructor.ref === req.params.ref.toLowerCase() && r.race.year == req.params.year);
  filteredResults.length ? res.json(filteredResults) : notFoundResponse(res, 'No results found for the specified constructor and season');
});

// /api/drivers - Returns all drivers
router.get('/api/drivers', (req, res) => {
  res.json(drivers);
});

// /api/drivers/ref - Returns single driver by driverRef
router.get('/api/drivers/:ref', (req, res) => {
  const driver = drivers.find(d => d.driverRef === req.params.ref.toLowerCase());
  driver ? res.json(driver) : notFoundResponse(res, 'Driver not found');
});

// /api/driverResults/ref/year - Race results for a driver and season
router.get('/api/driverResults/:ref/:year', (req, res) => {
  const filteredResults = results.filter(r => r.driver.ref === req.params.ref.toLowerCase() && r.race.year == req.params.year);
  filteredResults.length ? res.json(filteredResults) : notFoundResponse(res, 'No results found for the specified driver and season');
});

// /api/races/season/year - Returns all races for a season
router.get('/api/races/season/:year', (req, res) => {
  const seasonRaces = races.filter(r => r.year == req.params.year);
  seasonRaces.length ? res.json(seasonRaces) : notFoundResponse(res, 'No races found for the specified season');
});

// /api/races/id/id - Returns single race by raceId
router.get('/api/races/id/:id', (req, res) => {
  const race = races.find(r => r.id == req.params.id);
  race ? res.json(race) : notFoundResponse(res, 'Race not found');
});

// /api/results/race/id - Returns results for a specific race by raceId
router.get('/api/results/race/:id', (req, res) => {
  const raceResults = results.filter(r => r.race.id == req.params.id);
  raceResults.length ? res.json(raceResults) : notFoundResponse(res, 'No results found for the specified race');
});

// /api/results/season/year - Returns all results for a season
router.get('/api/results/season/:year', (req, res) => {
  const seasonResults = results.filter(r => r.race.year == req.params.year);
  seasonResults.length ? res.json(seasonResults) : notFoundResponse(res, 'No results found for the specified season');
});

// /api/qualifying/race/id - Returns qualifying for a specific race by raceId
router.get('/api/qualifying/race/:id', (req, res) => {
  const raceResults = qualifying.filter(r => r.race.id == req.params.id);
  raceResults.length ? res.json(raceResults) : notFoundResponse(res, 'No results found for the specified race');
});

// /api/qualifying/season/year - Returns all qualifying results for a season
router.get('/api/qualifying/season/:year', (req, res) => {
  const seasonResults = qualifying.filter(r => r.race.year == req.params.year);
  seasonResults.length ? res.json(seasonResults) : notFoundResponse(res, 'No results found for the specified season');
});

router.get('/api/debug/results', (req, res) => {
    console.log('Debugging resultData:', results.slice(0, 5)); // Log first 5 entries
    res.json(results.slice(0, 5)); // Return some data for testing
  });

router.get('/api/debug/races', (req, res) => {
console.log('Debugging races:', races.slice(0, 5)); // Log first 5 entries
res.json(races.slice(0, 5)); // Return some data for testing
});

module.exports = router;
