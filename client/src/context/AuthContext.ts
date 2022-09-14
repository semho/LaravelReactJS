import { createContext } from "react";

function noop() {}

interface IContext {
  token: null | string;
  userId: null | string;
  login: (jwtToken: string, id: string) => void;
  logout: () => void;
  isAuth: boolean;
}

export const AuthContext = createContext<IContext>({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuth: false,
});
