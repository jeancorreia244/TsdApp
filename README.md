TSD Events — Project scaffold

This repository contains a minimal scaffold for the TSD events application.

Backend (backend/)
- Express + GraphQL server
- Supabase client to interact with Postgres
- JWT authentication
- GraphQL schema with register/login and CRUD operations for Events

Frontend (frontend/)
- Minimal React app (Vite) with Login (demo) and event creation/listing

Database
- SQL migration at backend/migrations/init.sql to create Users and Events tables, constraints, and sample RLS policy comments.

Setup (backend)
1. cd backend
2. copy .env.example to .env and fill SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY and JWT_SECRET
3. npm install
4. Run DB migration using Supabase SQL editor or psql: paste the SQL from backend/migrations/init.sql
5. Start server: npm start

Notes on security and RLS
- The SQL file contains guidance for enabling RLS. When using Supabase auth, adapt the policies to use auth.uid() instead of the illustrative example.
- Do NOT commit your SUPABASE_SERVICE_ROLE_KEY to source control. Use environment variables or a secrets manager.

Frontend setup
1. cd frontend
2. npm install
3. Create a .env.local or set VITE_API_URL to the backend URL, e.g. VITE_API_URL=http://localhost:4000
4. npm run dev

Next steps
- Harden authentication integration with Supabase Auth or OAuth 2.0 (Supabase provides built-in OAuth providers)
- Add input sanitization and stronger validation both server-side and client-side
- Improve frontend UX (event edit/delete, better forms, navigation)

If you want, continue and I can run npm installs and start the dev server here, or implement more features (pagination, tests, CI/CD, deployment setup).