const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const newsCards = [
        {
            title: "",
            image: ""
        },
        {
            title: "",
            image: ""
        },
    ];

    console.log("Seeding news cards...");
    for (const news of newsCards) {    
        await prisma.newsCard.create({
            data: news,
        });
    }
    console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
