import { Title } from "@mantine/core";

import SignInWithGoogleButton from "@/components/common/SignInWithGoogleButton/SignInWithGoogleButton";
import supabase from "@/utils/supabase";

const CreateUser = () => {
  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div>
      <Title order={2}>サインイン</Title>
      <SignInWithGoogleButton />
    </div>
  );
};

export default CreateUser;
