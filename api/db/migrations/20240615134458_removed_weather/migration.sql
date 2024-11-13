/*
  Warnings:

  - You are about to drop the column `weather` on the `Inspection` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Inspection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "siteId" INTEGER NOT NULL,
    "inspectorId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "permitOnSite" BOOLEAN NOT NULL,
    "swpppOnSite" BOOLEAN NOT NULL,
    "bmpsInstalledPerSwppp" BOOLEAN NOT NULL,
    "siteInspectionReports" BOOLEAN NOT NULL,
    "inspectionType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "violationsNotes" TEXT,
    "whomToContact" TEXT,
    "newStormEvent" BOOLEAN NOT NULL,
    "stormDateTime" DATETIME,
    "stormDuration" TEXT,
    "approximatePrecipitation" REAL,
    "weatherAtTime" TEXT NOT NULL,
    "temperature" REAL,
    "previousDischarge" BOOLEAN NOT NULL,
    "newDischarges" BOOLEAN NOT NULL,
    "dischargeAtThisTime" BOOLEAN NOT NULL,
    "currentDischarges" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Inspection_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inspection_inspectorId_fkey" FOREIGN KEY ("inspectorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inspection" ("approximatePrecipitation", "bmpsInstalledPerSwppp", "createdAt", "currentDischarges", "date", "description", "dischargeAtThisTime", "endTime", "id", "inspectionType", "inspectorId", "newDischarges", "newStormEvent", "permitOnSite", "previousDischarge", "severity", "siteId", "siteInspectionReports", "startTime", "stormDateTime", "stormDuration", "swpppOnSite", "temperature", "title", "updatedAt", "violationsNotes", "weatherAtTime", "whomToContact") SELECT "approximatePrecipitation", "bmpsInstalledPerSwppp", "createdAt", "currentDischarges", "date", "description", "dischargeAtThisTime", "endTime", "id", "inspectionType", "inspectorId", "newDischarges", "newStormEvent", "permitOnSite", "previousDischarge", "severity", "siteId", "siteInspectionReports", "startTime", "stormDateTime", "stormDuration", "swpppOnSite", "temperature", "title", "updatedAt", "violationsNotes", "weatherAtTime", "whomToContact" FROM "Inspection";
DROP TABLE "Inspection";
ALTER TABLE "new_Inspection" RENAME TO "Inspection";
PRAGMA foreign_key_check("Inspection");
PRAGMA foreign_keys=ON;
