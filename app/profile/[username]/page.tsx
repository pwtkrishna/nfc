import UserProfilePage from "@/components/user-profile/UserProfilePage";
import { notFound } from "next/navigation";

async function getUser(username: string) {
  username = "johndoe123";
  const res = await fetch(
    // `https://nfc.aardana.com/api/users/${encodeURIComponent(username)}`
    `https://nfc.aardana.com/api/users/${encodeURIComponent(username)}`
  );
  if (!res.ok) return null;
  const { data } = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const user = await getUser(params.username);
  if (!user) return notFound();

  // Map API user to your profile component props if needed
  // const profile = mapApiUserToProfile(user);

  return <UserProfilePage profile={user} />;
}
