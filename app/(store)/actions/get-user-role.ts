"use server";

import { cookies } from "next/headers";

export async function getUserRole() {
  const role = cookies().get("user_role")?.value;

  if (!role) {
    return null;
  }

  return role;
}
