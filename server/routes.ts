import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { type InsertAdmissionEnquiry } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/admission-enquiries", async (req, res) => {
    const enquiryData: InsertAdmissionEnquiry = req.body;

    try {
      const enquiry = await storage.createEnquiry(enquiryData);
      res.status(201).json(enquiry);
    } catch (error) {
      console.error("Error submitting admission enquiry:", error);
      res.status(500).json({ message: "Failed to submit admission enquiry" });
    }
  });

  app.get("/api/admission-enquiries", async (req, res) => {
    try {
      const enquiries = await storage.getAllEnquiries();
      res.status(200).json(enquiries);
    } catch (error) {
      console.error("Error fetching admission enquiries:", error);
      res.status(500).json({ message: "Failed to fetch admission enquiries" });
    }
  });

  app.get("/api/admission-enquiries/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const enquiry = await storage.getEnquiry(id);
      if (enquiry) {
        res.status(200).json(enquiry);
      } else {
        res.status(404).json({ message: "Admission enquiry not found" });
      }
    } catch (error) {
      console.error("Error fetching admission enquiry by ID:", error);
      res.status(500).json({ message: "Failed to fetch admission enquiry" });
    }
  });

  app.put("/api/admission-enquiries/:id", async (req, res) => {
    const { id } = req.params;
    const enquiryData: Partial<InsertAdmissionEnquiry> = req.body;

    try {
      const updatedEnquiry = await storage.updateEnquiry(id, enquiryData);
      if (updatedEnquiry) {
        res.status(200).json(updatedEnquiry);
      } else {
        res.status(404).json({ message: "Admission enquiry not found" });
      }
    } catch (error) {
      console.error("Error updating admission enquiry:", error);
      res.status(500).json({ message: "Failed to update admission enquiry" });
    }
  });

  app.delete("/api/admission-enquiries/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await storage.deleteEnquiry(id);
      if (deleted) {
        res.status(200).json({ message: "Admission enquiry deleted successfully" });
      } else {
        res.status(404).json({ message: "Admission enquiry not found" });
      }
    } catch (error) {
      console.error("Error deleting admission enquiry:", error);
      res.status(500).json({ message: "Failed to delete admission enquiry" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}