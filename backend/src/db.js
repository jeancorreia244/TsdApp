const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set. Check .env');
}

// Ensure a WebSocket implementation is available on Node versions < 22
// Supabase realtime requires a WebSocket constructor when running on Node
try {
  if (typeof global.WebSocket === 'undefined') {
    // prefer 'ws' package if installed
    global.WebSocket = require('ws');
  }
} catch (e) {
  // ws not installed; realtime may fail on Node <22. Continue and let createClient throw if necessary.
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  global: { headers: { 'x-application': 'tsd-events-backend' } }
});

module.exports = { supabase };
