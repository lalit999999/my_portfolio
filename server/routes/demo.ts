import { RequestHandler } from "express";
import { DemoResponse } from "@shared/api"; // Optional: for type safety

export const handleDemo: RequestHandler = (req, res) => {
  const response: DemoResponse = {
    message: 'This is a demo endpoint!'
  };
  res.json(response);
};