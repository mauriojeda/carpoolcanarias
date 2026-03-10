import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Callback de autenticación (placeholder)
export async function GET(req: NextRequest) {
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ ok: true });
}
