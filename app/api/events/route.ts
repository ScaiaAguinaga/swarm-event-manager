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

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Extract and parse JSON data from request body

    await connectToDatabase(); // Ensure connection to the database

    const newEvent = new Event(body); // Create a new Event instance with the provided data

    await newEvent.save(); // Save the new Event to the database

    return NextResponse.json(newEvent, { status: 201 }); // Respond with the created event and status 201
  } catch (error) {
    console.error("Error creating event:", error); // Log any errors

    return NextResponse.json(
      { message: "Error creating event" }, // Respond with an error message
      { status: 500 },
    );
  }
}
