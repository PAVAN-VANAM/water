import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some machines
  const machine1 = await prisma.machine.create({
    data: {
      name: 'Machine A',
      type: 'Type 1',
      model: 'Model X',
      serialNumber: 'SN123456',
      purchaseDate: new Date('2020-01-01'),
      manufacturer: 'Manufacturer A',
      status: 'operational',
      productionHistory: {
        create: [
          {
            name: 'Shift 1',
            currentOutput: 100,
            targetOutput: 120,
            date: new Date('2023-07-01'),
            downtime: 10,
            downtimeReason: 'Maintenance',
          },
          {
            name: 'Shift 2',
            currentOutput: 110,
            targetOutput: 130,
            date: new Date('2023-07-02'),
            downtime: 5,
            downtimeReason: 'Minor Issue',
          },
        ],
      },
    },
  });

  const machine2 = await prisma.machine.create({
    data: {
      name: 'Machine B',
      type: 'Type 2',
      model: 'Model Y',
      serialNumber: 'SN654321',
      purchaseDate: new Date('2021-06-15'),
      manufacturer: 'Manufacturer B',
      status: 'under_maintenance',
      productionHistory: {
        create: [
          {
            name: 'Shift 1',
            currentOutput: 90,
            targetOutput: 110,
            date: new Date('2023-07-01'),
            downtime: 20,
            downtimeReason: 'Major Issue',
          },
        ],
      },
    },
  });

  console.log({ machine1, machine2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
