import {
  integer,
  pgTable,
  varchar,
  text,
  doublePrecision,
} from "drizzle-orm/pg-core";
import { z } from "zod";

export const productTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: doublePrecision().notNull(),
});

export const productSchema = z.object({
  name: z.string().min(1, { message: "Enter product name" }),
  description: z.string().min(1, { message: "Enter product description" }),
  price: z.number(),
  image: z.string(),
});
