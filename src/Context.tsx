import { createContext, useContext, useState, type ReactNode } from "react";

const curFrContext = createContext();

export default function Context({ children }: { children: ReactNode }) {
  const [curFrId, setCurFrId] = useState(9);
  const [curConvo, setCurConvo] = useState('dm');

  console.log(curFrId);
  return (
    <curFrContext.Provider value={{ curFrId, setCurFrId, curConvo, setCurConvo }}>
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
