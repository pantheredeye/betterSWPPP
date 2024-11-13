-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bmp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isStandard" BOOLEAN NOT NULL,
    "siteId" INTEGER,
    CONSTRAINT "Bmp_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Bmp" ("description", "id", "isStandard", "name", "siteId") SELECT "description", "id", "isStandard", "name", "siteId" FROM "Bmp";
DROP TABLE "Bmp";
ALTER TABLE "new_Bmp" RENAME TO "Bmp";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
