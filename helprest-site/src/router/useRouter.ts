import { createContext, useContext } from 'react';

export type AppRoute = 
  | '/'
  | '/privacidade'
  | '/termos'
  | '/exclusao-de-dados'
  | '/seguranca-dos-dados'
  | '/aviso-de-saude'
  | '/suporte';

export interface RouterContextValue {
  currentPath: string;
  navigate: (to: string) => void;
  isPending: boolean;
}

export const RouterContext = createContext<RouterContextValue>({
  currentPath: '/',
  navigate: () => {},
  isPending: false,
});

export const useRouter = () => useContext(RouterContext);
