"use client";

import SignInWithGoogleButton from "@/components/common/SignInWithGoogleButton";
import supabase from "@/utils/supabase";

const SignIn = () => {
  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return <SignInWithGoogleButton onClick={signIn} />;
};

export default SignIn;
