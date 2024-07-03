import { prisma } from "@/lib/prisma";

export default async function Home() {
  const production = await prisma.productionHistory.findFirst();

  return (
      <main>
        {production?.downtime}
      </main>
  );
}
