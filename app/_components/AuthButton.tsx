"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const AuthButton = () => {
  // Supabaseクライアント作成
  const supabase = createClientComponentClient();

  // サインイン処理
  const handleSignIn = async () => {
    // GitHub OAuthで認証する
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };
  // サインアウト処理
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <button onClick={handleSignIn}>Login</button>
      <button onClick={handleSignOut}>Logout</button>
    </>
  );
};