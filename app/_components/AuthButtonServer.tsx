import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthButton } from "./AuthButton";

export default async function AuthButtonServer() {
  const supabase = createServerComponentClient({ cookies });

  // サーバーコンポーネント上ではセッションを取得する
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // クライアントコンポーネントへセッションを渡す
  return <AuthButton session={session} />;
}
