import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export const runtime = 'edge'


export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/'
  console.log('inside revalidate: ', path)
  revalidatePath(path)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}