import { NextResponse } from 'next/server'
import { getDbData, saveDbData } from '@/lib/db'

export async function GET() {
  const data = getDbData()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  try {
    const newData = await request.json()
    const success = saveDbData(newData)
    
    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: "Failed to save data" }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request format" }, { status: 400 })
  }
}
