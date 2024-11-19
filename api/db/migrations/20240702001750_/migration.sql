/*
  Warnings:

  - You are about to drop the column `type` on the `Media` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bmpId,inspectionId]` on the table `BmpData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Media" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inspectionId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Media_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Media" ("id", "inspectionId", "url") SELECT "id", "inspectionId", "url" FROM "Media";
DROP TABLE "Media";
ALTER TABLE "new_Media" RENAME TO "Media";
PRAGMA foreign_key_check("Media");
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "BmpData_bmpId_inspectionId_key" ON "BmpData"("bmpId", "inspectionId");
