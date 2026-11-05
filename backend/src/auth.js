const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { supabase } = require('./db');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'change-me';

function signToken(user) {
  const payload = { id: user.id, email: user.email };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

async function getUserFromToken(req) {
  const auth = req.headers['authorization'];
  if (!auth) return null;
  const parts = auth.split(' ');
  if (parts.length !== 2) return null;
  const token = parts[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // fetch user from DB to ensure still valid
    const { data, error } = await supabase
      .from('Users')
      .select('*')
      .eq('id', decoded.id)
      .single();
    if (error) return null;
    return data;
  } catch (err) {
    return null;
  }
}

module.exports = { signToken, getUserFromToken };
