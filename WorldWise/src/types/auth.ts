import { User } from "@/interfaces/user";

export type AuthLoginPayload = Pick<User, "email" | "password">;
