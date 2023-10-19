/*
  Warnings:

  - Added the required column `broadbandPackageId` to the `new_connection_req` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "new_connection_req" ADD COLUMN     "broadbandPackageId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "new_connection_req" ADD CONSTRAINT "new_connection_req_broadbandPackageId_fkey" FOREIGN KEY ("broadbandPackageId") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
