import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface AdmissionEnquiry {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  class: string;
  source: string;
  enquiryDate: string;
  lastFollowUpDate?: string;
  nextFollowUpDate?: string;
  status: 'Active' | 'Converted' | 'Closed';
  remarks?: string;
  createdAt: string;
  updatedAt: string;
}

export type InsertAdmissionEnquiry = Omit<AdmissionEnquiry, 'id' | 'createdAt' | 'updatedAt'>;