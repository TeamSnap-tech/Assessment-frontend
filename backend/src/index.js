const express = require('express');
const expressCoreValidator = require('express-core-validator');
const cors = require('cors');
const teamsRouter = require('./routes/teams');
const membersRouter = require('./routes/members');

const app = express();
app.use(expressCoreValidator());
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/teams', teamsRouter);
app.use('/api/members', membersRouter);

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
