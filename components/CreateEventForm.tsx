"use client";

import { IEvent } from "@/lib/mongodb/models/event.model";
import { useState } from "react";

const CreateEventForm = () => {
  const [eventData, setEventData] = useState<Partial<IEvent>>({
    title: "Test Event",
    description: "This is a test to see if my database connection works",
    location: "Woo Woo",
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
      {/* <h1>{JSON.stringify(eventData)}</h1> */}
      <form className="grid grid-cols-2 gap-y-3 md:gap-y-6">
        <div className="col-span-2 flex flex-col">
          <label htmlFor="event-title" className="event-form-label">
            Title
          </label>
          <input
            id="event-title"
            type="text"
            placeholder="Title"
            className="event-form-input w-[175px] md:w-[300px]"
            onChange={(e) =>
              setEventData({ ...eventData, title: e.target.value })
            }
          />
        </div>

        <div className="col-span-2 flex flex-col">
          <label htmlFor="event-description" className="event-form-label">
            Description
          </label>
          <textarea
            id="event-description"
            placeholder="Description"
            className="event-form-input h-[150px] w-[250px] md:h-[200px] md:w-[400px]"
            onChange={(e) =>
              setEventData({ ...eventData, description: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="event-location" className="event-form-label">
            Location
          </label>
          <input
            id="event-location"
            type="text"
            placeholder="Location"
            className="event-form-input w-[175px] md:w-[300px]"
            onChange={(e) =>
              setEventData({ ...eventData, location: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="event-image" className="event-form-label">
            Image
          </label>
          <input id="event-image" type="file" className="pt-[3px]" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="event-start-date" className="event-form-label">
            Start Date
          </label>
          <input
            id="event-start-date"
            type="date"
            placeholder="Start Date"
            className="event-form-input w-[175px] md:w-[300px]"
            // onChange={(e) =>
            //   setEventData({ ...eventData, location: e.target.value })
            // }
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="event-end-date" className="event-form-label">
            End Date
          </label>
          <input
            id="event-end-date"
            type="date"
            placeholder="End Date"
            className="event-form-input w-[175px] md:w-[300px]"
            // onChange={(e) =>
            //   setEventData({ ...eventData, location: e.target.value })
            // }
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="event-price" className="event-form-label">
            Price
          </label>
          <input
            id="event-price"
            type="number"
            placeholder="Price"
            className="event-form-input w-[175px] md:w-[300px]"
            onChange={(e) =>
              setEventData({ ...eventData, price: e.target.value })
            }
          />
        </div>
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
