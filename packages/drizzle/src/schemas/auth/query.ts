import { eq } from "drizzle-orm";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import { type UserTable, user } from "./table";
import { UserSchema } from "./validation";

function parse(user: UserTable) {
  return UserSchema.parse(user);
}

export const AuthQueries = (db: NeonDatabase) => {
  return {
    findById: async (id: UserSchema["id"]) => {
      const [result] = await db.select().from(user).where(eq(user.id, id));
      if (!result) return null;

      return parse(result);
    },
    findByEmail: async (email: UserSchema["email"]) => {
      const [result] = await db
        .select()
        .from(user)
        .where(eq(user.email, email));
      if (!result) return null;
      return parse(result);
    },
    findAll: async () => {
      const results = await db.select().from(user);
      return results.map(parse);
    },
  };
};
