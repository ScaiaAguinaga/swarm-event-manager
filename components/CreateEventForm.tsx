"use client";

import { IEvent } from "@/lib/mongodb/models/event.model";
import { useState } from "react";

const CreateEventForm = () => {
  const [eventData, setEventData] = useState<Partial<IEvent>>({
    title: "", // Required
    description: "",
    location: "",
    imageUrl: "",
    startDateTime: new Date(),
    endDateTime: new Date(),
    price: "",
    isFree: false,
    url: "",
    // category: { type: Schema.Types.ObjectId, ref: "Category" },
    // organizer: { type: Schema.Types.ObjectId, ref: "Organizer" },
  });

  const handleClick = async () => {
    try {
      // Check for a valid title
      if (!eventData.title || eventData.title.trim() === "") {
        throw new Error("Title Missing");
      }

      await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Inform the server about the content type
        },
        body: JSON.stringify(eventData),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      {/* <h1>{JSON.stringify(eventData)}</h1> */}
      <form className="grid grid-cols-2 gap-y-3 md:gap-y-6">
        <div className="col-span-2 flex flex-col">
          <label htmlFor="event-title" className="event-form-label">
            Title
          </label>
          <input
            id="event-title"
            type="text"
            placeholder="Event Name"
            value={eventData.title}
            className="event-form-input w-[250px] md:w-[400px]"
            onChange={(e) =>
              setEventData({ ...eventData, title: e.target.value })
            }
          />
        </div>

        <label>
          <input />
        </label>
      </form>

      {/* Temp Submit Button */}
      <button
        onClick={handleClick}
        className="mt-20 rounded-lg bg-primary p-2 text-3xl font-bold"
      >
        Create Event
      </button>
    </section>
  );
};

export default CreateEventForm;
