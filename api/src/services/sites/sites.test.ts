import type { Site } from "@prisma/client";

import { sites, site, createSite, updateSite, deleteSite } from "./sites";
import type { StandardScenario } from "./sites.scenarios";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("sites", () => {
  scenario("returns all sites", async (scenario: StandardScenario) => {
    const result = await sites();

    expect(result.length).toEqual(Object.keys(scenario.site).length);
  });

  scenario("returns a single site", async (scenario: StandardScenario) => {
    const result = await site({ id: scenario.site.one.id });

    expect(result).toEqual(scenario.site.one);
  });

  scenario("creates a site", async (scenario: StandardScenario) => {
    const result = await createSite({
      input: {
        name: "String",
        organizationId: scenario.site.two.organizationId,
        updatedAt: "2024-12-01T14:25:31.050Z",
      },
    });

    expect(result.name).toEqual("String");
    expect(result.organizationId).toEqual(scenario.site.two.organizationId);
    expect(result.updatedAt).toEqual(new Date("2024-12-01T14:25:31.050Z"));
  });

  scenario("updates a site", async (scenario: StandardScenario) => {
    const original = (await site({ id: scenario.site.one.id })) as Site;
    const result = await updateSite({
      id: original.id,
      input: { name: "String2" },
    });

    expect(result.name).toEqual("String2");
  });

  scenario("deletes a site", async (scenario: StandardScenario) => {
    const original = (await deleteSite({ id: scenario.site.one.id })) as Site;
    const result = await site({ id: original.id });

    expect(result).toEqual(null);
  });
});
