import { useState, useCallback, useEffect } from "react";

const NAME_STORAGE = "userData";

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const login = useCallback((jwtToken: string, id: string) => {
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(
      NAME_STORAGE,
      JSON.stringify({ userId: id, token: jwtToken })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(NAME_STORAGE);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(NAME_STORAGE)!);

    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { login, logout, token, userId };
}
