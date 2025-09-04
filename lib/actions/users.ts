"use server";

import { auth } from "../auth";

export const SignIn = async (email: string, password: string) => {
  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
};


export const SignUp = async (email: string, password: string, name: string) => {
  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name
    },
  });
};