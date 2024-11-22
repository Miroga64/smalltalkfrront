import { FC, createContext, ReactNode, ReactElement } from 'react';
import { AppStore } from '../stores/appStore';

const store = new AppStore()

export const AppStoreContext = createContext<AppStore>(store);

export type AppStoreContextType = FC<{
  children?: ReactNode;
}>;

export const AppStoreProvider: AppStoreContextType = ({
  children,
}): ReactElement => {
  return (
    <AppStoreContext.Provider value={store}>{children}</AppStoreContext.Provider>
  )
}