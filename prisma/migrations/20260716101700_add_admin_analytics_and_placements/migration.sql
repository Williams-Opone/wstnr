-- CreateEnum
CREATE TYPE "SectionPlacement" AS ENUM ('LATEST_DROP', 'LOOKBOOK_STATEMENT', 'ARCHIVE_GRID');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "placement" "SectionPlacement" NOT NULL DEFAULT 'ARCHIVE_GRID';

-- CreateTable
CREATE TABLE "AnalyticsHit" (
    "id" TEXT NOT NULL,
    "ipHash" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsHit_pkey" PRIMARY KEY ("id")
);
