"use server";

import { ServiceNewsService } from "@/services/news-card.service";
import { NextResponse } from "next/server";

const serviceNewsService = new ServiceNewsService



export async function GET() {
    return NextResponse.json(
        {
            "response": "success",
            "data": await serviceNewsService.getNewsCards()
        }
    )
}
