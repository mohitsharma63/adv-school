import { type User, type InsertUser, type AdmissionEnquiry, type InsertAdmissionEnquiry } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Admission Enquiry methods
  getAllEnquiries(): Promise<AdmissionEnquiry[]>;
  getEnquiry(id: string): Promise<AdmissionEnquiry | undefined>;
  createEnquiry(enquiry: InsertAdmissionEnquiry): Promise<AdmissionEnquiry>;
  updateEnquiry(id: string, updates: Partial<AdmissionEnquiry>): Promise<AdmissionEnquiry | undefined>;
  deleteEnquiry(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private enquiries: Map<string, AdmissionEnquiry>;

  constructor() {
    this.users = new Map();
    this.enquiries = new Map();
    
    // Add some sample data
    this.seedSampleData();
  }

  private seedSampleData() {
    const sampleEnquiries: AdmissionEnquiry[] = [
      {
        id: randomUUID(),
        studentName: "Charlie Barrett",
        parentName: "John Barrett",
        phone: "8905674352",
        email: "john.barrett@email.com",
        class: "5th Grade",
        source: "Google Ads",
        enquiryDate: "2025-09-26",
        lastFollowUpDate: "2025-10-30",
        nextFollowUpDate: "2025-09-30",
        status: "Active",
        remarks: "Interested in admission",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: randomUUID(),
        studentName: "David Wilson",
        parentName: "Mary Wilson",
        phone: "9067845634",
        email: "mary.wilson@email.com",
        class: "3rd Grade",
        source: "Front Office",
        enquiryDate: "2025-09-22",
        lastFollowUpDate: "2025-10-25",
        nextFollowUpDate: "2025-09-25",
        status: "Active",
        remarks: "Looking for quality education",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    sampleEnquiries.forEach(enquiry => {
      this.enquiries.set(enquiry.id, enquiry);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllEnquiries(): Promise<AdmissionEnquiry[]> {
    return Array.from(this.enquiries.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getEnquiry(id: string): Promise<AdmissionEnquiry | undefined> {
    return this.enquiries.get(id);
  }

  async createEnquiry(insertEnquiry: InsertAdmissionEnquiry): Promise<AdmissionEnquiry> {
    const id = randomUUID();
    const now = new Date().toISOString();
    const enquiry: AdmissionEnquiry = {
      ...insertEnquiry,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.enquiries.set(id, enquiry);
    return enquiry;
  }

  async updateEnquiry(id: string, updates: Partial<AdmissionEnquiry>): Promise<AdmissionEnquiry | undefined> {
    const existing = this.enquiries.get(id);
    if (!existing) return undefined;
    
    const updated: AdmissionEnquiry = {
      ...existing,
      ...updates,
      id: existing.id,
      createdAt: existing.createdAt,
      updatedAt: new Date().toISOString()
    };
    
    this.enquiries.set(id, updated);
    return updated;
  }

  async deleteEnquiry(id: string): Promise<boolean> {
    return this.enquiries.delete(id);
  }
}

export const storage = new MemStorage();
