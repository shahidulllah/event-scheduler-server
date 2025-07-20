import { v4 as uuidv4 } from "uuid";
import { EventModel } from "../models/event.model";
import { Event } from "../types/event.type";
import { categorizeEvent } from "../utils/categorize";

export const EventService = {
  getAllEvents: () => EventModel.getAll(),

  createEvent: (data: Omit<Event, "id" | "category" | "archived">): Event => {
    const category = categorizeEvent(data.title, data.notes);
    const newEvent: Event = {
      ...data,
      id: uuidv4(),
      archived: false,
      category,
    };
    EventModel.add(newEvent);
    return newEvent;
  },

  archiveEvent: (id: string): boolean => {
    return EventModel.archive(id);
  },

  deleteEvent: (id: string): boolean => {
    return EventModel.delete(id);
  },
};
