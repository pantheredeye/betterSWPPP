import type { Prisma, User } from "@prisma/client";
import type { ScenarioData } from "@redwoodjs/testing/api";

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: "String1906765",
        hashedPassword: "String",
        salt: "String",
        updatedAt: "2024-12-01T14:17:18.826Z",
      },
    },
    two: {
      data: {
        email: "String557182",
        hashedPassword: "String",
        salt: "String",
        updatedAt: "2024-12-01T14:17:18.826Z",
      },
    },
  },
});

export type StandardScenario = ScenarioData<User, "user">;
