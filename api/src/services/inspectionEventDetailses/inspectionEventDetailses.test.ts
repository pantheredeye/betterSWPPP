import type { InspectionEventDetails } from "@prisma/client";

import {
  inspectionEventDetailses,
  inspectionEventDetails,
  createInspectionEventDetails,
  updateInspectionEventDetails,
  deleteInspectionEventDetails,
} from "./inspectionEventDetailses";
import type { StandardScenario } from "./inspectionEventDetailses.scenarios";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("inspectionEventDetailses", () => {
  scenario(
    "returns all inspectionEventDetailses",
    async (scenario: StandardScenario) => {
      const result = await inspectionEventDetailses();

      expect(result.length).toEqual(
        Object.keys(scenario.inspectionEventDetails).length,
      );
    },
  );

  scenario(
    "returns a single inspectionEventDetails",
    async (scenario: StandardScenario) => {
      const result = await inspectionEventDetails({
        id: scenario.inspectionEventDetails.one.id,
      });

      expect(result).toEqual(scenario.inspectionEventDetails.one);
    },
  );

  scenario(
    "creates a inspectionEventDetails",
    async (scenario: StandardScenario) => {
      const result = await createInspectionEventDetails({
        input: {
          eventId: scenario.inspectionEventDetails.two.eventId,
          organizationId: scenario.inspectionEventDetails.two.organizationId,
        },
      });

      expect(result.eventId).toEqual(
        scenario.inspectionEventDetails.two.eventId,
      );
      expect(result.organizationId).toEqual(
        scenario.inspectionEventDetails.two.organizationId,
      );
    },
  );

  scenario(
    "updates a inspectionEventDetails",
    async (scenario: StandardScenario) => {
      const original = (await inspectionEventDetails({
        id: scenario.inspectionEventDetails.one.id,
      })) as InspectionEventDetails;
      const result = await updateInspectionEventDetails({
        id: original.id,
        input: { eventId: scenario.inspectionEventDetails.two.eventId },
      });

      expect(result.eventId).toEqual(
        scenario.inspectionEventDetails.two.eventId,
      );
    },
  );

  scenario(
    "deletes a inspectionEventDetails",
    async (scenario: StandardScenario) => {
      const original = (await deleteInspectionEventDetails({
        id: scenario.inspectionEventDetails.one.id,
      })) as InspectionEventDetails;
      const result = await inspectionEventDetails({ id: original.id });

      expect(result).toEqual(null);
    },
  );
});
