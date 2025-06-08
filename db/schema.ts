import { pgTable, text, timestamp, boolean, serial, varchar, integer, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const modalityEnum = pgEnum("modality", ["remote", "on_site", "hybrid"]);
export const columnEnum = pgEnum("column_title", ["rejected", "applied", "interview", "offer"]);

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

// Boards
export const boards = pgTable("boards", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  slug: varchar("slug", { length: 256 }).notNull().unique(),
  userId: integer("user_id").notNull().references(() => user.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Columns
export const columns = pgTable("columns", {
  id: serial("id").primaryKey(),
  title: columnEnum("title").notNull(),
  boardId: integer("board_id").notNull().references(() => boards.id),
  order: integer("order").notNull(),
});

// Jobs
export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  company: varchar("company", { length: 256 }).notNull(),
  modality: modalityEnum("modality").notNull(),
  url: text("url"),
  salary: varchar("salary", { length: 128 }),
  description: text("description"),
  columnId: integer("column_id").notNull().references(() => columns.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// ------------------------------- RELATIONS --------------------------------

export const userRelations = relations(user, ({ many }) => ({
  boards: many(boards),
}));

export const boardRelations = relations(boards, ({ one, many }) => ({
  user: one(user, {
    fields: [boards.userId],
    references: [user.id],
  }),
  columns: many(columns),
}));

export const columnRelations = relations(columns, ({ one, many }) => ({
  board: one(boards, {
    fields: [columns.boardId],
    references: [boards.id],
  }),
  jobs: many(jobs),
}));

export const jobRelations = relations(jobs, ({ one }) => ({
  column: one(columns, {
    fields: [jobs.columnId],
    references: [columns.id],
  }),
}));

export const schema = {
  user,
  session,
  account,
  verification,
  boards,
  columns,
  jobs,
};
