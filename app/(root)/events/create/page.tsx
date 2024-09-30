"use client";

import { IEvent } from "@/lib/mongodb/models/event.model";
import { useState } from "react";

const CreateEventForm = () => {
  const [eventData, setEventData] = useState<Partial<IEvent>>({
    title: "", // Required
    description: "",
    location: "",
    createdAt: new Date(),
    imageUrl: "",
    startDateTime: new Date(),
    endDateTime: new Date(),
    price: "",
    isFree: false,
    // category: { type: Schema.Types.ObjectId, ref: "Category" },
    // organizer: { type: Schema.Types.ObjectId, ref: "Organizer" },
  });

  // Flags for required fields - false = not triggered, true = triggered
  const [requiredFields, setRequiredFields] = useState({
    title: false,
  });

  const handleSubmit = async () => {
    try {
      // Check for required attributes

      // Call POST function to save to database
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
    <section className="px-10 text-left md:flex md:flex-col md:items-center md:px-0">
      {/* <h1>{JSON.stringify(eventData)}</h1> */}
      <form className="md:w-2/3">
        <h1>Create Event</h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse
          deleniti nesciunt laboriosam inventore magni vitae facilis, voluptatum
          quasi sed, obcaecati alias? Est omnis odit quidem quisquam dignissimos
          ipsa numquam.
        </p>

        {/* Grouping form fields */}
        <fieldset className="my-8">
          <legend className="event-form-label mb-2 font-semibold">
            Event Information
          </legend>
          {/* Event title */}
          <div className="mb-4">
            <label htmlFor="event-title" className="event-form-label block">
              Event Title<span className="text-red-500"> *</span>
            </label>
            <input
              id="event-title"
              type="text"
              className="event-form-input w-full"
              value={eventData.title}
              onChange={(e) =>
                setEventData({ ...eventData, title: e.target.value })
              }
            />
          </div>

          {/* Event description */}
          <div className="mb-4">
            <label
              htmlFor="event-description"
              className="event-form-label block"
            >
              Description
            </label>
            <textarea
              id="event-description"
              className="event-form-input h-20 w-full py-2 md:h-32 lg:h-48"
              value={eventData.description}
              onChange={(e) =>
                setEventData({ ...eventData, description: e.target.value })
              }
            />
          </div>
        </fieldset>
      </form>

      {/* Temp Submit Button */}
      <button
        onClick={handleSubmit}
        className="rounded-lg bg-primary p-2 text-3xl font-bold"
      >
        Create Event
      </button>
    </section>
  );
};

export default CreateEventForm;
