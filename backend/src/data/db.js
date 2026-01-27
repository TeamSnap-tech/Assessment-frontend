// In-memory store for assessment. Resets on server restart.
const teams = [
  { id: '1', name: 'Thunder Hawks', sport: 'Soccer', memberCount: 12 },
  { id: '2', name: 'River City Rebels', sport: 'Basketball', memberCount: 10 },
  { id: '3', name: 'Sunset Strikers', sport: 'Soccer', memberCount: 14 },
  { id: '4', name: 'Downtown Devils', sport: 'Baseball', memberCount: 9 },
];

const members = [
  { id: 'm1', teamId: '1', name: 'Alex Morgan', email: 'alex@example.com', role: 'Player' },
  { id: 'm2', teamId: '1', name: 'Jordan Lee', email: 'jordan@example.com', role: 'Captain' },
  { id: 'm3', teamId: '1', name: 'Sam Rivera', email: 'sam@example.com', role: 'Player' },
  { id: 'm4', teamId: '2', name: 'Casey Kim', email: 'casey@example.com', role: 'Captain' },
  { id: 'm5', teamId: '2', name: 'Riley Johnson', email: 'riley@example.com', role: 'Player' },
  { id: 'm6', teamId: '3', name: 'Jamie Chen', email: 'jamie@example.com', role: 'Coach' },
];

let nextMemberId = 7;

function getTeams() {
  return [...teams];
}

function getTeamById(id) {
  return teams.find((t) => t.id === id) || null;
}

function getMembersByTeamId(teamId) {
  return members.filter((m) => m.teamId === teamId);
}

function addMember(teamId, { name, email, role }) {
  const id = `m${nextMemberId++}`;
  const member = { id, teamId, name, email, role: role || 'Player' };
  members.push(member);
  const team = getTeamById(teamId);
  if (team) team.memberCount = (team.memberCount || 0) + 1;
  return member;
}

module.exports = {
  getTeams,
  getTeamById,
  getMembersByTeamId,
  addMember,
};
