import type { MembershipRole } from "@prisma/client";

import {
  membershipRoles,
  membershipRole,
  createMembershipRole,
  updateMembershipRole,
  deleteMembershipRole,
} from "./membershipRoles";
import type { StandardScenario } from "./membershipRoles.scenarios";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("membershipRoles", () => {
  scenario(
    "returns all membershipRoles",
    async (scenario: StandardScenario) => {
      const result = await membershipRoles();

      expect(result.length).toEqual(
        Object.keys(scenario.membershipRole).length,
      );
    },
  );

  scenario(
    "returns a single membershipRole",
    async (scenario: StandardScenario) => {
      const result = await membershipRole({
        id: scenario.membershipRole.one.id,
      });

      expect(result).toEqual(scenario.membershipRole.one);
    },
  );

  scenario("creates a membershipRole", async (scenario: StandardScenario) => {
    const result = await createMembershipRole({
      input: {
        name: "String2978871",
        organizationId: scenario.membershipRole.two.organizationId,
      },
    });

    expect(result.name).toEqual("String2978871");
    expect(result.organizationId).toEqual(
      scenario.membershipRole.two.organizationId,
    );
  });

  scenario("updates a membershipRole", async (scenario: StandardScenario) => {
    const original = (await membershipRole({
      id: scenario.membershipRole.one.id,
    })) as MembershipRole;
    const result = await updateMembershipRole({
      id: original.id,
      input: { name: "String32489472" },
    });

    expect(result.name).toEqual("String32489472");
  });

  scenario("deletes a membershipRole", async (scenario: StandardScenario) => {
    const original = (await deleteMembershipRole({
      id: scenario.membershipRole.one.id,
    })) as MembershipRole;
    const result = await membershipRole({ id: original.id });

    expect(result).toEqual(null);
  });
});
