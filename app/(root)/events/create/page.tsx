"use client";

import { IEvent } from "@/lib/mongodb/models/event.model";
import { useState } from "react";
import { start } from "repl";

const CreateEventForm = () => {
  const [eventData, setEventData] = useState<Partial<IEvent>>({
    title: "", // Required
    description: "",
    location: "",
    createdAt: new Date(),
    imageUrl: "",
    date: "",
    startTime: "",
    endTime: "",
    price: "",
    isFree: false,
    // category: { type: Schema.Types.ObjectId, ref: "Category" },
    // organizer: { type: Schema.Types.ObjectId, ref: "Organizer" },
  });

  // API call to create on database
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

  // Flags for required fields - false = not triggered, true = triggered
  const [requiredFields, setRequiredFields] = useState({
    title: false,
  });

  // Function to update Date object based on date and time input

  return (
    <section className="px-10 text-left md:flex md:flex-col md:items-center md:px-0">
      {/* <p>{JSON.stringify(eventData)}</p> */}
      <form className="md:w-2/3">
        <h1 className="font-semi-bold">Create Event</h1>
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
              className="event-form-input h-20 w-full py-1 md:h-32 md:py-2 lg:h-48"
              value={eventData.description}
              onChange={(e) =>
                setEventData({ ...eventData, description: e.target.value })
              }
            />
          </div>

          {/* Event date, start time, and end time */}
          <div className="gap-x grid w-full grid-cols-2 gap-x-10 gap-y-4 md:grid-cols-7">
            {/* Date */}
            <div className="col-span-2 flex flex-col md:col-span-3">
              <label htmlFor="event-date" className="event-form-label">
                Date
              </label>
              <input
                id="event-date"
                type="date"
                className="event-form-input"
                value={eventData.date}
                onChange={(e) =>
                  setEventData({ ...eventData, date: e.target.value })
                }
              />
            </div>
            {/* Start Time */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="event-start-time" className="event-form-label">
                Start Time
              </label>
              <input
                id="event-start-time"
                type="time"
                className="event-form-input"
                value={eventData.startTime}
                onChange={(e) =>
                  setEventData({ ...eventData, startTime: e.target.value })
                }
              />
            </div>
            {/* End Time */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="event-end-time" className="event-form-label">
                End Time
              </label>
              <input
                id="event-end-time"
                type="time"
                className="event-form-input"
                value={eventData.endTime}
                onChange={(e) =>
                  setEventData({ ...eventData, endTime: e.target.value })
                }
              />
            </div>
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
