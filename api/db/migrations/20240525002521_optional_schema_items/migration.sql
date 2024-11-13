/*
  Warnings:

  - You are about to drop the column `address` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Site` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Site` table. All the data in the column will be lost.
  - Added the required column `addressLine1` to the `Site` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerName` to the `Site` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BmpData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bmpId" INTEGER NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "implemented" BOOLEAN,
    "maintenanceRequired" BOOLEAN,
    "repeatOccurrence" BOOLEAN,
    "correctiveActionNeeded" TEXT,
    "notes" TEXT,
    CONSTRAINT "BmpData_bmpId_fkey" FOREIGN KEY ("bmpId") REFERENCES "Bmp" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BmpData_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BmpData" ("bmpId", "correctiveActionNeeded", "id", "implemented", "inspectionId", "maintenanceRequired", "notes", "repeatOccurrence") SELECT "bmpId", "correctiveActionNeeded", "id", "implemented", "inspectionId", "maintenanceRequired", "notes", "repeatOccurrence" FROM "BmpData";
DROP TABLE "BmpData";
ALTER TABLE "new_BmpData" RENAME TO "BmpData";
CREATE TABLE "new_Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" TEXT NOT NULL,
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
INSERT INTO "new_Site" ("city", "createdAt", "id", "name", "siteTypeId", "state", "updatedAt") SELECT "city", "createdAt", "id", "name", "siteTypeId", "state", "updatedAt" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
