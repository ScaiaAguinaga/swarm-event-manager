"use client";

import { IEvent } from "@/lib/mongodb/models/event.model";
import React, { useState } from "react";

const page = () => {
  const [eventData, setEventData] = useState<Partial<IEvent>>({
    title: "Test Event",
    description: "This is a test to see if my database connection works",
    location: "Woo Woo",
    createdAt: new Date(),
    imageUrl: "imageURL",
    startDateTime: new Date(),
    endDateTime: new Date(),
    price: "$15.00",
    isFree: false,
    url: "eventURL",
  });

  const handleClick = async () => {
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Inform the server about the content type
        },
        body: JSON.stringify(eventData),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <button onClick={handleClick}>Create Event</button>
    </section>
  );
};

export default page;
