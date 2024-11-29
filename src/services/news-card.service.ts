import prisma from "lib/prisma";

export class ServiceNewsService {
    constructor(){}

    public async getNewsCards() {
        return await prisma.newsCard.findMany();
    }
}
