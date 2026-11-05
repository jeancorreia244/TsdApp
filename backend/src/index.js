const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const dotenv = require('dotenv');
const { schema, root } = require('./schema');
const { getUserFromToken } = require('./auth');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/graphql', async (req, res, next) => {
  // attach user to context
  const user = await getUserFromToken(req);
  return graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV !== 'production',
    context: { user }
  })(req, res, next);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
