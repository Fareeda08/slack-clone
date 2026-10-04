type Dm = {
  name: string;
  id: number;
  profilePic: string;
  email: string;
};

type Organization = {
  name: string;
  id: number;
};

type Profile = {
  name: string;
  id: number;
  namePronunciation: string;
  description: string;
  profilePic: string;
  email: string;

  dms: Dm[];
  organizations: Organization[];
};

export const users: Record<string, Profile> = {
  user1: {
    name: "Fawaz Abdulsalam",
    id: 0,
    namePronunciation: "",
    description: "",
    profilePic: "fawaz.jpg",
    email: "abdulsalamfawaz4@gmail.com",

    dms: [
      {
        name: "Daniel Umoren",
        id: 9,
        profilePic: "https://i.pravatar.cc/150?img=68",
        email: "danielumoren87@gmail.com",
      },
      {
        name: "Faiza Abdulsalam",
        id: 8,
        profilePic: "faiza.jpg",
        email: "faizaabdulsalam98@gmail.com",
      },
      {
        name: "Timileyin Joshua",
        id: 7,
        profilePic: "https://i.pravatar.cc/150?img=14",
        email: "timileyinjoshua12@gmail.com",
      },
      {
        name: "Saka Umuiah",
        id: 6,
        profilePic: "https://i.pravatar.cc/150?img=2",
        email: "sakaumuiah101@gmail.com",
      },
    ],

    organizations: [
      {
        name: "904 dufma",
        id: 200,
      },
      {
        name: "askorganizer",
        id: 201,
      },
      { name: "general", id: 202 },
      { name: "random", id: 203 },
      { name: "talkaboutyouridea", id: 204 },
    ],
  },
};
