import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME || 'sanjay_portfolio';

let client;
let clientPromise;

function getClient() {
  if (!MONGO_URL) return null;
  if (!clientPromise) {
    client = new MongoClient(MONGO_URL);
    clientPromise = client.connect();
  }
  return clientPromise;
}

async function getDb() {
  const c = await getClient();
  if (!c) return null;
  return c.db(DB_NAME);
}

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/');
  if (path === '' || path === 'health') {
    return NextResponse.json({ ok: true, service: 'sanjay-portfolio', time: new Date().toISOString() });
  }
  return NextResponse.json({ error: 'not found', path }, { status: 404 });
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/');
  try {
    if (path === 'contact') {
      const body = await request.json();
      const { name, email, message } = body || {};
      if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
      }
      const doc = {
        id: crypto.randomUUID(),
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        message: String(message).slice(0, 5000),
        createdAt: new Date().toISOString(),
      };
      try {
        const db = await getDb();
        if (db) {
          await db.collection('contact_messages').insertOne(doc);
        }
      } catch (e) {
        // ignore DB failure but still respond ok so the form works in any env
        console.error('Mongo insert error:', e?.message);
      }
      return NextResponse.json({ ok: true, id: doc.id });
    }
    return NextResponse.json({ error: 'not found', path }, { status: 404 });
  } catch (e) {
    return NextResponse.json({ error: 'server_error', message: e?.message }, { status: 500 });
  }
}
