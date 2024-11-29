

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const infoCards = [
        {
            title: "اپلیکیشن همراه من",
            description:"با نصب و استفاده از اپلیکیشن  همراه‌من می‌توانید خدمات مختلف و متنوع همراه‌اول را به صورت غیرحضوری و آنلاین تجربه کنید.",
            image: "/img/mymci-app.jpg"
        }
    ]
    const newsCards = [
        {
            title: "خرید گوشی",
            image: "/img/buy-phone-01.webp"
        },
        {
            title: "خرید سیم‌کارت",
            image: "/img/youth-postpaid-simcards-sale-boy-01.webp"
        },
        {
            title: "تبدیل اعتباری به دائمی",
            image: "/img/prepaid-to-postpaid-01.webp"
        },
    ];

    console.log("Seeding news cards...");
    for (const news of newsCards) {    
        await prisma.newsCard.create({
            data: news,
        });
    }
    for (const info of infoCards) {    
        await prisma.infoCard.create({
            data: info,
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
