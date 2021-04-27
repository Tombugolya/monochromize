import { createContext, FC, ReactNode, useState } from 'react';

type TDataContextProvider = FC<{ children: ReactNode }>;
interface DataState {
  imageSource: string;
  albumName: string;
  artistName: string;
  albumDescription: string;
}
interface TDataContext {
  data: DataState;
  setImageSource: (val: string) => void;
  setAlbumName: (val: string) => void;
  setArtistName: (val: string) => void;
  setAlbumDescription: (val: string) => void;
}

export const DataContext = createContext<TDataContext>(null);

export const DataContextProvider: TDataContextProvider = ({ children }) => {
  const [data, setData] = useState<DataState>({
    imageSource:
      'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png',
    albumName: '',
    artistName: '',
    albumDescription: '',
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
  const setAlbumDescription = (val: string) => {
    setData({ ...data, albumDescription: val });
  };
  return (
    <DataContext.Provider
      value={{
        data,
        setImageSource,
        setAlbumName,
        setArtistName,
        setAlbumDescription,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
