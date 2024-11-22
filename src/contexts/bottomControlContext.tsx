import { FC, createContext, ReactNode, ReactElement } from 'react';
import { BottomControl } from '../stores/bottomControl';

const store = new BottomControl()

export const BottomControlContext = createContext<BottomControl>(store);

export type BottomControlContextType = FC<{
  children?: ReactNode;
}>;

export const BottomControlProvider: BottomControlContextType = ({
  children,
}): ReactElement => {
  return (
    <BottomControlContext.Provider value={store}>{children}</BottomControlContext.Provider>
  )
}