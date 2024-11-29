import prisma from "lib/prisma";

export class ServiceInfoService {
    constructor(){}

    public async getInfoCards() {
        return await prisma.infoCard.findMany();
    }
}