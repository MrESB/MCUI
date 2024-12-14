import prisma from "lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const newsCardDetails = await prisma.newsCard.findUnique({
    where: { id: (await params).id },
  });

  return Response.json({ response: "success", data: newsCardDetails });
}