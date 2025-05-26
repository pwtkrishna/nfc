import UserProfilePage from "@/components/user-profile/UserProfilePage";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ username: string }>;
}

async function getUser(username: string) {
  const res = await fetch(
    // `https://nfc.aardana.com/api/users/${encodeURIComponent(username)}`
    `https://nfc.aardana.com/api/users/${encodeURIComponent(username)}`
  );
  if (!res.ok) return null;
  const { data } = await res.json();
  return data;
}

export default async function Page({ params }: Props) {
  const { username } = await params;
  const user = await getUser(username);
  if (!user) return notFound();

  // Map API user to your profile component props if needed
  // const profile = mapApiUserToProfile(user);

  return <UserProfilePage profile={user} />;
}
