import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButtonServer from "./_components/AuthButtonServer";

export default async function Home() {
  // クライアント作成
  const supabase = createServerComponentClient({ cookies });
  // postsテーブルからデータ取得
  const { data: posts } = await supabase.from("posts").select();

  return (
    <>
      <AuthButtonServer />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
