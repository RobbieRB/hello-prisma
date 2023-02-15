import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.menu.create({
  //   data: {
  //     name: "Italian Food",
  //   },
  // });

  await prisma.menuItem.create({
    data: {
      menuId: 2,
      country: "IT",
      description:
        "Combine toasted bread, tomatoes, and dressing in a large bowl",
      name: "Panzenella ",
      price: 100,
    },
  });
  const allMenuItems = await prisma.menuItem.findMany();
  console.log(allMenuItems);
  const allMenu = await prisma.menu.findMany();
  console.log(allMenu);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
