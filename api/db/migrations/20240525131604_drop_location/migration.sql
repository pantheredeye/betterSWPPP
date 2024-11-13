/*
  Warnings:

  - You are about to drop the column `location` on the `Site` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
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
INSERT INTO "new_Site" ("addressLine1", "addressLine2", "city", "country", "createdAt", "id", "name", "npdesTrackingNo", "ownerName", "postalCode", "siteInspector", "siteMap", "siteTypeId", "state", "updatedAt", "userId") SELECT "addressLine1", "addressLine2", "city", "country", "createdAt", "id", "name", "npdesTrackingNo", "ownerName", "postalCode", "siteInspector", "siteMap", "siteTypeId", "state", "updatedAt", "userId" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
