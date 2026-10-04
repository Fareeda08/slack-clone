/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

type SelectedInfo = {
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

  selectedInfo: SelectedInfo;
  setSelectedInfo: React.Dispatch<React.SetStateAction<SelectedInfo>>;
};

const curFrContext = createContext<ContextType | undefined>(undefined);

export default function Context({ children }: { children: ReactNode }) {
  const [curConvoId, setCurConvoId] = useState<number | null>(0);
  const [curConvo, setCurConvo] = useState<ConversationType>("dms");

  const [selectedInfo, setSelectedInfo] = useState<SelectedInfo>({
    name: "",
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
        selectedInfo,
        setSelectedInfo,
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
