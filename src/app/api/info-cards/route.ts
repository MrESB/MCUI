"use server";

import { ServiceInfoService } from "@/services/info-card.service";
import { NextResponse } from "next/server";

const serviceInfoService = new ServiceInfoService



export async function GET() {
    return NextResponse.json(
        {
            "response": "success",
            "data": await serviceInfoService.getInfoCards()
        }
    )
}
