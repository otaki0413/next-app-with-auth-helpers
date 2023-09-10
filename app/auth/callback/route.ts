import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// Code Exchange用のルートハンドラ
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  // 認証コードを使用して、Supabaseとのセッションを確立する
  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // サインイン後にリダイレクトするURLを指定
  return NextResponse.redirect(requestUrl.origin);
}
