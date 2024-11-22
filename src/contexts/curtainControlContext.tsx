import { FC, createContext, ReactNode, ReactElement } from 'react';
import { CurtainControl } from '../stores/curtainControl';

const store = new CurtainControl()

export const CurtainControlContext = createContext<CurtainControl>(store);

export type CurtainControlContextType = FC<{
  children?: ReactNode;
}>;

export const CurtainControlProvider:CurtainControlContextType = ({
  children,
}): ReactElement => {
  return (
    <CurtainControlContext.Provider value={store}>{children}</CurtainControlContext.Provider>
  )
}