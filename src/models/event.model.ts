import { events } from "../data/event";
import { Event } from "../types/event.type";

export const EventModel = {
  getAll: (): Event[] => {
    return events.sort((a, b) => {
      const aDate = new Date(`${a.date} ${a.time}`);
      const bDate = new Date(`${b.date} ${b.time}`);
      return aDate.getTime() - bDate.getTime();
    });
  },

  add: (event: Event): void => {
    events.push(event);
  },

  archive: (id: string): boolean => {
    const event = events.find((e) => e.id === id);
    if (event) {
      event.archived = true;
      return true;
    }
    return false;
  },

  delete: (id: string): boolean => {
    const index = events.findIndex((e) => e.id === id);
    if (index !== -1) {
      events.splice(index, 1);
      return true;
    }
    return false;
  },
};
