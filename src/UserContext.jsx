import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    // ❗️ ВСЯ работа с Telegram ТОЛЬКО здесь
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      tg.ready();

      if (tg.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
      } else {
        setUser(null);
      }
    } else {
      // Браузер / reload / не Telegram
      setUser(null);
    }

    setUserLoading(false);
  }, []);

  const initials = user?.first_name
    ? user.first_name[0].toUpperCase()
    : "";

  const displayName = user?.first_name || "Гость";
  const displayUsername = user?.username
    ? `@${user.username}`
    : "";

  return (
    <UserContext.Provider
      value={{
        user,
        userLoading,
        initials,
        displayName,
        displayUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);