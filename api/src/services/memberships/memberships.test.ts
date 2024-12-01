import type { Membership } from "@prisma/client";

import {
  memberships,
  membership,
  createMembership,
  updateMembership,
  deleteMembership,
} from "./memberships";
import type { StandardScenario } from "./memberships.scenarios";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("memberships", () => {
  scenario("returns all memberships", async (scenario: StandardScenario) => {
    const result = await memberships();

    expect(result.length).toEqual(Object.keys(scenario.membership).length);
  });

  scenario(
    "returns a single membership",
    async (scenario: StandardScenario) => {
      const result = await membership({ id: scenario.membership.one.id });

      expect(result).toEqual(scenario.membership.one);
    },
  );

  scenario("creates a membership", async (scenario: StandardScenario) => {
    const result = await createMembership({
      input: {
        userId: scenario.membership.two.userId,
        organizationId: scenario.membership.two.organizationId,
        invitationChannel: "EMAIL",
      },
    });

    expect(result.userId).toEqual(scenario.membership.two.userId);
    expect(result.organizationId).toEqual(
      scenario.membership.two.organizationId,
    );
    expect(result.invitationChannel).toEqual("EMAIL");
  });

  scenario("updates a membership", async (scenario: StandardScenario) => {
    const original = (await membership({
      id: scenario.membership.one.id,
    })) as Membership;
    const result = await updateMembership({
      id: original.id,
      input: { invitationChannel: "EXTERNAL" },
    });

    expect(result.invitationChannel).toEqual("EXTERNAL");
  });

  scenario("deletes a membership", async (scenario: StandardScenario) => {
    const original = (await deleteMembership({
      id: scenario.membership.one.id,
    })) as Membership;
    const result = await membership({ id: original.id });

    expect(result).toEqual(null);
  });
});