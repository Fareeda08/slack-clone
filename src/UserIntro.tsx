import { users } from "../public/data/users"

import { User } from "lucide-react"

export default function UserIntro({
  profilePic,
  name,
  viewUserProfile,
}: {
  profilePic?: string;
  name: string;
  viewUserProfile: () => void;
}) {
  const userInfo = users.user1;

  return (
    <div className="flex gap-4 flex-col pt-10 pl-4">
      <div className="flex gap-4 items-center">
        {profilePic || userInfo.profilePic ? (
          <img
            src={profilePic || userInfo.profilePic}
            alt="profile_picture"
            className="size-30"
          />
        ) : (
          <User />
        )}
        <p className="font-semibold">{name || userInfo.name}</p>
      </div>

      <p>
        This message is just between{" "}
        {
          <span className="text-sky-600 bg-sky-700/20">
            @{name || userInfo.name}
          </span>
        }{" "}
        and you. Check out their profile to learn more about them
      </p>

      <button
        onClick={() => {
          viewUserProfile();
        }}
        className="w-fit bg-[#36193c63] p-2 border border-fuchsia-900 rounded-md"
      >
        View profile
      </button>
    </div>
  );
}
