/*
  Warnings:

  - You are about to drop the `BMP` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BMP";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Bmp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isStandard" BOOLEAN NOT NULL,
    "siteId" INTEGER NOT NULL,
    CONSTRAINT "Bmp_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BmpData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bmpId" INTEGER NOT NULL,
    "inspectionId" INTEGER NOT NULL,
    "implemented" BOOLEAN NOT NULL,
    "maintenanceRequired" BOOLEAN NOT NULL,
    "repeatOccurrence" BOOLEAN NOT NULL,
    "correctiveActionNeeded" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    CONSTRAINT "BmpData_bmpId_fkey" FOREIGN KEY ("bmpId") REFERENCES "Bmp" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BmpData_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BmpData" ("bmpId", "correctiveActionNeeded", "id", "implemented", "inspectionId", "maintenanceRequired", "notes", "repeatOccurrence") SELECT "bmpId", "correctiveActionNeeded", "id", "implemented", "inspectionId", "maintenanceRequired", "notes", "repeatOccurrence" FROM "BmpData";
DROP TABLE "BmpData";
ALTER TABLE "new_BmpData" RENAME TO "BmpData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
