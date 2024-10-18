import type { Prisma, User } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: "String1200576",
        hashedPassword: "String",
        salt: "String",
        updatedAt: "2024-10-18T11:23:45.755Z",
      },
    },
    two: {
      data: {
        email: "String1741914",
        hashedPassword: "String",
        salt: "String",
        updatedAt: "2024-10-18T11:23:45.755Z",
      },
    },
  },
});

export type StandardScenario = ScenarioData<User, "user">;
