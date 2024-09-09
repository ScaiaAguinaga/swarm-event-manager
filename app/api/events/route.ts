import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

import Event from "@/lib/mongodb/models/event.model";

export async function GET() {
  try {
    await connectToDatabase();
    const events = await Event.find();
    return new NextResponse(JSON.stringify(events));
    
  } catch (error) {
    console.error("Error: ", error);
  }

  return NextResponse.json({});
}
