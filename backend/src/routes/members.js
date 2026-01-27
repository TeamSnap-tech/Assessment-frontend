const express = require('express');
const { getMembersByTeamId, addMember } = require('../data/db');

const router = express.Router();

// GET /api/members?teamId=1 - members for a team
router.get('/', (req, res) => {
  const { teamId } = req.query;
  if (!teamId) {
    return res.status(400).json({ error: 'teamId query is required' });
  }
  const members = getMembersByTeamId(teamId);
  res.json(members);
});

// POST /api/members - add a member (body: teamId, name, email, role?)
router.post('/', (req, res) => {
  const { teamId, name, email, role } = req.body;
  if (!teamId || !name || !email) {
    return res.status(400).json({
      error: 'teamId, name, and email are required',
    });
  }
  const member = addMember(teamId, { name, email, role });
  res.status(201).json(member);
});

module.exports = router;
