-- CreateTable
CREATE TABLE "Machine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'operational',

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductionHistory" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "currentOutput" INTEGER NOT NULL,
    "targetOutput" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "downtime" INTEGER NOT NULL,
    "downtimeReason" TEXT NOT NULL,

    CONSTRAINT "ProductionHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductionHistory" ADD CONSTRAINT "ProductionHistory_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
