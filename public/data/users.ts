type Profile = {
  name: string;
  id: number;
  namePronunciation: string;
  description: string;

  friends: { name: string; id: number; profilePic: string }[];
};

export const users: Record<string, Profile> = {
  user1: {
    name: "Fawaz Abdulsalam",
    id: 1,
    namePronunciation: "",
    description: "",

    friends: [
      {
        name: "Daniel Umoren",
        id: 9,
        profilePic: "https://i.pravatar.cc/150?img=68",
      },
      {
        name: "Faiza Abdulsalam",
        id: 8,
        profilePic: "https://i.pravatar.cc/150?img=68",
      },
      {
        name: "Timileyin Joshua",
        id: 7,
        profilePic: "https://i.pravatar.cc/150?img=68",
      },
      {
        name: "Saka Umuiah",
        id: 6,
        profilePic: "https://i.pravatar.cc/150?img=68",
      },
    ],
  },
};
