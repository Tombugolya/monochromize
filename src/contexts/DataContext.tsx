import { createContext, FC, ReactNode, useState } from 'react';

type TDataContextProvider = FC<{ children: ReactNode }>;
interface DataState {
  imageSource: string;
  albumName: string;
  artistName: string;
}
interface TDataContext {
  data: DataState;
  setImageSource: (val: string) => void;
  setAlbumName: (val: string) => void;
  setArtistName: (val: string) => void;
}

export const DataContext = createContext<TDataContext>(null);

export const DataContextProvider: TDataContextProvider = ({ children }) => {
  const [data, setData] = useState<DataState>({
    imageSource:
      'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
    albumName: '',
    artistName: '',
  });
  const setImageSource = (val: string) => {
    setData({ ...data, imageSource: val });
  };
  const setAlbumName = (val: string) => {
    setData({ ...data, albumName: val });
  };
  const setArtistName = (val: string) => {
    setData({ ...data, artistName: val });
  };
  return (
    <DataContext.Provider
      value={{ data, setImageSource, setAlbumName, setArtistName }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
