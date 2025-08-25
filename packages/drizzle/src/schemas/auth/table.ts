import { PRIMARY_ID_LENGTH } from "@workspace/drizzle/utils/shared-consts";
import {
  boolean,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createId } from "../../utils/create-id";

export const user = pgTable("user", {
  id: varchar({ length: PRIMARY_ID_LENGTH })
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type UserTable = typeof user.$inferSelect;

export const session = pgTable("session", {
  id: varchar({ length: PRIMARY_ID_LENGTH })
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar({ length: PRIMARY_ID_LENGTH }).references(() => user.id),
  token: varchar({ length: 255 }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  ipAddress: varchar({ length: 255 }).notNull(),
  userAgent: text().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type SessionTable = typeof session.$inferSelect;

export const account = pgTable("account", {
  id: varchar({ length: PRIMARY_ID_LENGTH })
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar({ length: PRIMARY_ID_LENGTH }).references(() => user.id),
  accountId: varchar({ length: 255 }).notNull(),
  providerId: varchar({ length: 255 }).notNull(),
  accessToken: varchar({ length: 255 }),
  refreshToken: varchar({ length: 255 }),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text(),
  idToken: varchar({ length: 255 }),
  password: varchar({ length: 255 }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type AccountTable = typeof account.$inferSelect;

export const verification = pgTable("verification", {
  id: varchar({ length: PRIMARY_ID_LENGTH })
    .primaryKey()
    .$defaultFn(() => createId()),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type VerificationTable = typeof verification.$inferSelect;
