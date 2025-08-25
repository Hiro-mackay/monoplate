import {
  boolean,
  foreignKey,
  pgTable,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

export const verification = pgTable("verification", {
  id: varchar({ length: 24 }).primaryKey().notNull(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp("expires_at", { mode: "string" }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
});

export const user = pgTable(
  "user",
  {
    id: varchar({ length: 24 }).primaryKey().notNull(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    emailVerified: boolean("email_verified").notNull(),
    password: varchar({ length: 255 }).notNull(),
    image: text(),
    createdAt: timestamp("created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [unique("user_email_unique").on(table.email)],
);

export const account = pgTable(
  "account",
  {
    id: varchar({ length: 24 }).primaryKey().notNull(),
    accountId: varchar({ length: 255 }).notNull(),
    providerId: varchar({ length: 255 }).notNull(),
    userId: varchar({ length: 24 }),
    accessToken: varchar({ length: 255 }).notNull(),
    refreshToken: varchar({ length: 255 }).notNull(),
    idToken: varchar({ length: 255 }).notNull(),
    accessTokenExpiresAt: timestamp("access_token_expires_at", {
      mode: "string",
    }).notNull(),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", {
      mode: "string",
    }).notNull(),
    scope: text(),
    password: varchar({ length: 255 }).notNull(),
    createdAt: timestamp("created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "account_userId_user_id_fk",
    }),
  ],
);

export const session = pgTable(
  "session",
  {
    id: varchar({ length: 24 }).primaryKey().notNull(),
    userId: varchar({ length: 24 }),
    token: varchar({ length: 255 }).notNull(),
    ipAddress: varchar({ length: 255 }).notNull(),
    userAgent: text().notNull(),
    expiresAt: timestamp("expires_at", { mode: "string" }).notNull(),
    createdAt: timestamp("created_at", { mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "session_userId_user_id_fk",
    }),
  ],
);
