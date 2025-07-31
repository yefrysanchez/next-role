import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  varchar,
  integer,
  pgEnum,
  uuid,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ------------------ ENUMS ------------------

export const modalityEnum = pgEnum("modality", ["remote", "on_site", "hybrid"]);

// ------------------ AUTH ------------------

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").$defaultFn(() => false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").$defaultFn(() => new Date()).notNull(),
  updatedAt: timestamp("updated_at").$defaultFn(() => new Date()).notNull(),
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
  createdAt: timestamp("created_at").$defaultFn(() => new Date()),
  updatedAt: timestamp("updated_at").$defaultFn(() => new Date()),
});

// ------------------ BOARDS ------------------

export const boards = pgTable("boards", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 256 }).notNull(),
  slug: varchar("slug", { length: 256 }).notNull().unique(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// ------------------ COLUMNS ------------------

export const columns = pgTable("columns", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 50 }).notNull(), // ✅ Changed from enum to string
  boardId: uuid("board_id")
    .notNull()
    .references(() => boards.id),
  order: integer("order").notNull(),
});

// ------------------ JOBS ------------------

export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  company: varchar("company", { length: 256 }).notNull(),
  modality: modalityEnum("modality").notNull(),
  url: text("url"),
  salary: varchar("salary", { length: 128 }),
  description: text("description"),
  columnId: integer("column_id")
    .notNull()
    .references(() => columns.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// ------------------ SKILLS ------------------

export const skillCategories = pgTable("skill_categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
});

export const skillCategorySkills = pgTable(
  "skill_category_skills",
  {
    skillId: integer("skill_id")
      .notNull()
      .references(() => skills.id, { onDelete: "cascade" }),
    categoryId: integer("category_id")
      .notNull()
      .references(() => skillCategories.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: [table.skillId, table.categoryId],
  })
);

export const userSkills = pgTable(
  "user_skills",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    skillId: integer("skill_id")
      .notNull()
      .references(() => skills.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: [table.userId, table.skillId],
  })
);

// ------------------ RELATIONS ------------------

export const userRelations = relations(user, ({ many }) => ({
  boards: many(boards),
  userSkills: many(userSkills),
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

export const skillRelations = relations(skills, ({ many }) => ({
  categories: many(skillCategorySkills),
  users: many(userSkills),
}));

export const skillCategoryRelations = relations(
  skillCategories,
  ({ many }) => ({
    skills: many(skillCategorySkills),
  })
);

export const skillCategorySkillRelations = relations(
  skillCategorySkills,
  ({ one }) => ({
    skill: one(skills, {
      fields: [skillCategorySkills.skillId],
      references: [skills.id],
    }),
    category: one(skillCategories, {
      fields: [skillCategorySkills.categoryId],
      references: [skillCategories.id],
    }),
  })
);

export const userSkillRelations = relations(userSkills, ({ one }) => ({
  user: one(user, {
    fields: [userSkills.userId],
    references: [user.id],
  }),
  skill: one(skills, {
    fields: [userSkills.skillId],
    references: [skills.id],
  }),
}));

// ------------------ SCHEMA EXPORT ------------------

export const schema = {
  user,
  session,
  account,
  verification,
  boards,
  columns,
  jobs,
  skills,
  skillCategories,
  skillCategorySkills,
  userSkills,
  userRelations,
  boardRelations,
  columnRelations,
  jobRelations,
  skillRelations,
  skillCategoryRelations,
  skillCategorySkillRelations,
  userSkillRelations,
};
