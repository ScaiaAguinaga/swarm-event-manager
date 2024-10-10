import { model, models, Schema, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl?: string;
  date: string;
  startTime: string; // "HH:mm" format
  endTime: string; // "HH:mm" format
  price?: string;
  isFree: boolean;
  // category?: { _id: string; name: string };
  // organizer?: { _id: string; name: string };
}

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  location: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: false },
  date: { type: String, required: false },
  startTime: { type: String, required: false }, // Event start time (HH:mm)
  endTime: { type: String, required: false }, // Event end time (HH:mm)
  price: { type: String, required: false },
  isFree: { type: Boolean, default: false },
  // category: { type: Schema.Types.ObjectId, ref: "Category" },
  // organizer: { type: Schema.Types.ObjectId, ref: "Organizer" },
});

const Event = models.Event || model<IEvent>("Event", EventSchema);

export default Event;
