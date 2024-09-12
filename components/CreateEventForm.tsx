import { IEvent } from "@/lib/mongodb/models/event.model";
import React, { useState } from "react";

const CreateEventForm = () => {
  const [eventData, setEventData] = useState<IEvent>({
    _id: "",
    title: "",
    description: "",
    location: "",
    createdAt: new Date(),
    imageUrl: "",
    startDateTime: new Date(),
    endDateTime: new Date(),
    price: "",
    isFree: false,
    url: "",
    // category: { _id: string; name: string };
    // organizer: { _id: string; name: string };
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

export default CreateEventForm;
