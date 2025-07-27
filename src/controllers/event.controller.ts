import { Request, Response } from "express";
import { EventService } from "../services/event.service";

export const EventController = {
  getAll: (req: Request, res: Response) => {
    const { category } = req.query;
    const events = EventService.getAllEvents(category as string | undefined);
    res.status(200).json(events);
  },

  create: (req: Request, res: Response) => {
    const { title, date, time, notes } = req.body;

    if (!title || !date || !time) {
      return res
        .status(400)
        .json({ message: "Title, date, and time are required." });
    }

    try {
      const event = EventService.createEvent({ title, date, time, notes });
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: "Error creating event." });
    }
  },

  archive: (req: Request, res: Response) => {
    const { id } = req.params;
    const success = EventService.archiveEvent(id);
    if (success) return res.status(200).json({ message: "Event archived." });
    return res.status(404).json({ message: "Event not found." });
  },

  delete: (req: Request, res: Response) => {
    const { id } = req.params;
    const success = EventService.deleteEvent(id);
    if (success) return res.status(200).json({ message: "Event deleted." });
    return res.status(404).json({ message: "Event not found." });
  },
};
