/*
  Warnings:

  - Added the required column `menuId` to the `MenuItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MenuItem" ADD COLUMN     "menuId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
