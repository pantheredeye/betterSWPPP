/*
  Warnings:

  - Added the required column `bmpsInstalledPerSwppp` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentDischarges` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dischargeAtThisTime` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inspectionType` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newDischarges` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newStormEvent` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permitOnSite` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previousDischarge` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `severity` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteInspectionReports` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `swpppOnSite` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weatherAtTime` to the `Inspection` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "npdesTrackingNo" TEXT,
    "siteTypeId" INTEGER NOT NULL,
    "siteInspector" TEXT,
    "siteMap" TEXT,
    "ownerName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Site_siteTypeId_fkey" FOREIGN KEY ("siteTypeId") REFERENCES "SiteType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Site_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Site" ("addressLine1", "addressLine2", "city", "country", "createdAt", "id", "name", "npdesTrackingNo", "ownerName", "postalCode", "siteInspector", "siteMap", "siteTypeId", "state", "updatedAt", "userId") SELECT "addressLine1", "addressLine2", "city", "country", "createdAt", "id", "name", "npdesTrackingNo", "ownerName", "postalCode", "siteInspector", "siteMap", "siteTypeId", "state", "updatedAt", "userId" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
CREATE TABLE "new_Inspection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "siteId" INTEGER NOT NULL,
    "inspectorId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "weather" TEXT NOT NULL,
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
INSERT INTO "new_Inspection" ("createdAt", "date", "id", "inspectorId", "siteId", "updatedAt", "weather") SELECT "createdAt", "date", "id", "inspectorId", "siteId", "updatedAt", "weather" FROM "Inspection";
DROP TABLE "Inspection";
ALTER TABLE "new_Inspection" RENAME TO "Inspection";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
