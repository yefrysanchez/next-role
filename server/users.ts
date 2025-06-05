"use server";

import { auth } from "@/lib/auth";
import { SignInTypes } from "@/lib/types";

export const signIn = async (data: SignInTypes ) => {
  await auth.api.signInEmail({
    body: data,
  });
};

export const signUp = async (email: string, password: string, lastName: string, firstName: string) => {
  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name: `${firstName} ${lastName}`,
    },
  });
};
