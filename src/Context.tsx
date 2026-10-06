/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

type SelectedFriendInfoType = {
  id: number;
  name: string;
  profilePic?: string | undefined;
  time?: string;
  creator?: string;
  email?: string
};

type ConversationType = "organizations" | "dms";

type ContextType = {
  curConvoId: number | null;
  setCurConvoId: React.Dispatch<React.SetStateAction<number | null>>;

  curConvo: ConversationType;
  setCurConvo: React.Dispatch<React.SetStateAction<ConversationType>>;

  selectedFriendInfo: SelectedFriendInfoType;
  setSelectedFriendInfo: React.Dispatch<
    React.SetStateAction<SelectedFriendInfoType>
  >;

  selectedMessageID: number | null;
  setSelectedMessageID: React.Dispatch<React.SetStateAction<number | null>>;
};

const curFrContext = createContext<ContextType | undefined>(undefined);

export default function Context({ children }: { children: ReactNode }) {
  const [curConvoId, setCurConvoId] = useState<number | null>(0);
  const [curConvo, setCurConvo] = useState<ConversationType>("dms");
  const [selectedMessageID, setSelectedMessageID] = useState<number | null>(null)

  const [selectedFriendInfo, setSelectedFriendInfo] = useState<SelectedFriendInfoType>({
    name: "Fawaz Abdulsalam",
    id: 0,
    profilePic: "",
    time: "",
    creator: "",
  });

  return (
    <curFrContext.Provider
      value={{
        curConvoId,
        setCurConvoId,

        curConvo,
        setCurConvo,

        selectedFriendInfo,
        setSelectedFriendInfo,

        selectedMessageID,
        setSelectedMessageID
      }}
    >
      {children}
    </curFrContext.Provider>
  );
}

export function useFrContext() {
  const data = useContext(curFrContext);

  if (data === undefined)
    throw new Error("context used outside of Context.tsx");

  return data;
}
