import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ルートが読み込まれる直前に実行
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // クライアント作成
  const supabase = createMiddlewareClient({ req, res });
  // 有効期限が切れたセッションを更新
  await supabase.auth.getSession();
  return res;
}
