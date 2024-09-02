import AvatarCircles from "@/components/magicui/avatar-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export async function AvatarCercle() {
  return (
    <AvatarCircles
      className="flex flex-row items-center justify-center mb-10 w-full"
      numPeople={99}
      avatarUrls={avatarUrls}
    />
  );
}
