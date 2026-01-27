const express = require('express');
const { getTeams, getTeamById } = require('../data/db');

const router = express.Router();

// GET /api/teams - list all teams
router.get('/', (req, res) => {
  const teams = getTeams();
  res.json(teams);
});

// GET /api/teams/:id - team by id
router.get('/:id', (req, res) => {
  const team = getTeamById(req.params.id);
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }
  res.json(team);
});

module.exports = router;
