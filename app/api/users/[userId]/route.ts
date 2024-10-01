import { getUser } from "@/app/lib/data/users";
import { isAPIError } from "@/app/api/types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
    req: NextRequest,
    context: { params: { userId: string } }
) => {
    const userId = context.params.userId;
    try {
        const user = await getUser(userId);
        return NextResponse.json(user);
    } catch (e) {
        if (isAPIError(e))
            return NextResponse.json({ error: e.msg }, { status: e.code });
        if (e instanceof TypeError)
            return NextResponse.json({ error: e.message }, { status: 400 }); // type error -> bad request
        if (e instanceof Error)
            return NextResponse.json({ error: e.message }, { status: 500 });
        return NextResponse.json({ error: e }, { status: 500 });
    }
};
