const { buildSchema } = require('graphql');
const bcrypt = require('bcrypt');
const { supabase } = require('./db');
const { signToken } = require('./auth');

const schema = buildSchema(`
  enum EventStatus { pendente confirmed cancelled }

  type User {
    id: Int
    name: String
    email: String
    phone: String
    created_at: String
  }

  type Event {
    id: Int
    title: String
    description: String
    date: String
    time: String
    location: String
    status: String
    user_id: Int
  }

  type Bible {
    id: Int
    user_id: Int
    book: String
    chapter: Int
    verse: String
    notes: String
    created_at: String
  }

  type Prayer {
    id: Int
    user_id: Int
    focus: String
    note: String
    duration: Int
    created_at: String
  }

  type Fasting {
    id: Int
    user_id: Int
    start_date: String
    end_date: String
    duration_hours: Int
    notes: String
    created_at: String
  }

  type Devotional {
    id: Int
    user_id: Int
    reference: String
    title: String
    content: String
    date: String
    created_at: String
  }

  type Group {
    id: Int
    created_by: Int
    name: String
    description: String
    focus: String
    invite_code: String
    progress: Int
    created_at: String
  }

  type AuthPayload {
    token: String
    user: User
  }

  input EventInput {
    title: String!
    description: String!
    date: String!
    time: String!
    location: String
    status: String
  }

  input BibleInput {
    book: String!
    chapter: Int!
    verse: String
    notes: String
  }

  input PrayerInput {
    focus: String
    note: String
    duration: Int
  }

  input FastingInput {
    start_date: String!
    end_date: String!
    duration_hours: Int
    notes: String
  }

  input DevotionalInput {
    reference: String
    title: String
    content: String!
    date: String!
  }

  input GroupInput {
    name: String!
    description: String
    focus: String
    invite_code: String
  }

  type Query {
    me: User
    events: [Event]
    event(id: Int!): Event
    bibles: [Bible]
    prayers: [Prayer]
    fastings: [Fasting]
    devotionals: [Devotional]
    groups: [Group]
  }

  type Mutation {
    register(name: String!, email: String!, password: String!, phone: String): AuthPayload
    login(email: String!, password: String!): AuthPayload
    
    createEvent(event: EventInput!): Event
    updateEvent(id: Int!, event: EventInput!): Event
    deleteEvent(id: Int!): Boolean

    createBible(bible: BibleInput!): Bible
    createPrayer(prayer: PrayerInput!): Prayer
    createFasting(fasting: FastingInput!): Fasting
    createDevotional(devotional: DevotionalInput!): Devotional
    
    createGroup(group: GroupInput!): Group
    joinGroup(inviteCode: String!): Group
  }
`);

const root = {
  me: async (args, context) => {
    return context.user || null;
  },

  // --- AUTENTICAÇÃO ---
  register: async ({ name, email, password, phone }) => {
    const hashed = await bcrypt.hash(password, 10);
    const { data, error } = await supabase
      .from('Users')
      .insert([{ name, email, password_hash: hashed, phone }])
      .select('*')
      .single();
    if (error) throw error;
    const token = signToken(data);
    return { token, user: data };
  },

  login: async ({ email, password }) => {
    const { data, error } = await supabase
      .from('Users')
      .select('*')
      .eq('email', email)
      .single();
    if (error) throw new Error('Credenciais inválidas');
    const match = await bcrypt.compare(password, data.password_hash);
    if (!match) throw new Error('Credenciais inválidas');
    const token = signToken(data);
    return { token, user: data };
  },

  // --- EVENTOS ---
  events: async (args, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('Events')
      .select('*')
      .eq('user_id', context.user.id)
      .order('date', { ascending: true });
    if (error) throw error;
    return data;
  },

  event: async ({ id }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('Events')
      .select('*')
      .eq('id', id)
      .eq('user_id', context.user.id)
      .single();
    if (error) throw error;
    return data;
  },

  createEvent: async ({ event }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const payload = { ...event, status: event.status || 'pendente', user_id: context.user.id };
    const { data, error } = await supabase.from('Events').insert([payload]).select('*').single();
    if (error) throw error;
    return data;
  },

  updateEvent: async ({ id, event }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const check = await supabase.from('Events').select('id').eq('id', id).eq('user_id', context.user.id).single();
    if (check.error) throw new Error('Registro não encontrado');
    const { data, error } = await supabase.from('Events').update(event).eq('id', id).select('*').single();
    if (error) throw error;
    return data;
  },

  deleteEvent: async ({ id }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const check = await supabase.from('Events').select('id').eq('id', id).eq('user_id', context.user.id).single();
    if (check.error) throw new Error('Registro não encontrado');
    const { error } = await supabase.from('Events').delete().eq('id', id);
    if (error) throw error;
    return true;
  },

  // --- LEITURA BÍBLICA ---
  bibles: async (args, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('bibles')
      .select('*')
      .eq('user_id', context.user.id)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  createBible: async ({ bible }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('bibles')
      .insert([{ ...bible, user_id: context.user.id }])
      .select('*')
      .single();
    if (error) throw error;
    return data;
  },

  // --- ORAÇÕES ---
  prayers: async (args, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('prayers')
      .select('*')
      .eq('user_id', context.user.id)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  createPrayer: async ({ prayer }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('prayers')
      .insert([{ ...prayer, user_id: context.user.id }])
      .select('*')
      .single();
    if (error) throw error;
    return data;
  },

  // --- JEJUNS ---
  fastings: async (args, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('fastings')
      .select('*')
      .eq('user_id', context.user.id)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  createFasting: async ({ fasting }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('fastings')
      .insert([{ ...fasting, user_id: context.user.id }])
      .select('*')
      .single();
    if (error) throw error;
    return data;
  },

  // --- DEVOCIONAIS ---
  devotionals: async (args, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('devotionals')
      .select('*')
      .eq('user_id', context.user.id)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  createDevotional: async ({ devotional }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase
      .from('devotionals')
      .insert([{ ...devotional, user_id: context.user.id }])
      .select('*')
      .single();
    if (error) throw error;
    return data;
  },

  // --- GRUPOS ---
  groups: async (args, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data, error } = await supabase.from('groups').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  createGroup: async ({ group }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const code = group.invite_code || `G-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const { data, error } = await supabase
      .from('groups')
      .insert([{ ...group, invite_code: code, created_by: context.user.id }])
      .select('*')
      .single();
    if (error) throw error;

    await supabase.from('group_members').insert([{ group_id: data.id, user_id: context.user.id, role: 'Líder' }]);
    return data;
  },

  joinGroup: async ({ inviteCode }, context) => {
    if (!context.user) throw new Error('Não autorizado');
    const { data: group, error: fetchErr } = await supabase
      .from('groups')
      .select('*')
      .eq('invite_code', inviteCode.toUpperCase())
      .single();
    if (fetchErr || !group) throw new Error('Grupo não encontrado');

    await supabase.from('group_members').insert([{ group_id: group.id, user_id: context.user.id, role: 'Participante' }]);
    return group;
  }
};

module.exports = { schema, root };