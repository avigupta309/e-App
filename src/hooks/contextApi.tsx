import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface childProps {
  children: React.ReactNode;
}

interface contextTypeProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

const DataContext = createContext<contextTypeProps | null>(null);

export const DataContextProvider = ({ children }: childProps) => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <DataContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </DataContext.Provider>
  );
};


export const UseDataContext = () => {
  const data = useContext(DataContext);

  if (!data) {
    throw new Error("UseDataContext must be used within DataContextProvider");
  }

  return data;
};
