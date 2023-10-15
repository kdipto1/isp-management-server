-- CreateEnum
CREATE TYPE "InternetConnectionStatus" AS ENUM ('disconnected', 'connected');

-- AlterTable
ALTER TABLE "customer_connection_status" ADD COLUMN     "internetConnectionStatus" "InternetConnectionStatus" NOT NULL DEFAULT 'disconnected';
