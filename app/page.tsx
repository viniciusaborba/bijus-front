import { api } from "@/service/api";

interface GetUserResponse {
  user: User;
}

async function getUser(userId: string) {
  const result = await api.get<GetUserResponse>(`/users/${userId}`);

  return result.data;
}

export default async function Home() {
  const { user } = await getUser("869800f8-096d-42dc-be00-73aa495ddcf2");

  return (
    <div>
      {user.email}
      {user.address}
      {user.role}
      {user.name}
    </div>
  );
}
