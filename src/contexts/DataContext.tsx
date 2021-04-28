import { createContext, useState, FC, ReactNode } from 'react';

type TDataContextProvider = FC<{ children: ReactNode }>;
export interface DataState {
  imageSource: string;
  albumName: string;
  albumDescription: string;
}
interface TDataContext {
  data: DataState;
  setData: (val: DataState) => void;
}

export const DataContext = createContext<TDataContext>(null);

export const DataContextProvider: TDataContextProvider = ({ children }) => {
  const [data, setData] = useState<DataState>({
    imageSource:
      'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
    albumName: '',
    albumDescription: '',
  });
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
