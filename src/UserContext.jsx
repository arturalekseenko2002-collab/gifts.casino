// src/UserContext.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    const tgUser = tg?.initDataUnsafe?.user;

    // если мини-апп открыт не из телеги
    if (!tgUser) {
      setUserLoading(false);
      return;
    }

    const body = {
      telegramId: tgUser.id,
      username: tgUser.username,
      firstName: tgUser.first_name,
      lastName: tgUser.last_name,
      photoUrl: tgUser.photo_url, // <-- важно!
      ref: tg?.initDataUnsafe?.start_param || null,
    };

    // URL бэка, можешь вынести в .env как VITE_API_URL
    fetch(import.meta.env.VITE_API_URL + "/register-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data?.ok) {
          setUser(data.user);
        } else {
          console.error("register-user failed", data);
        }
      })
      .catch((e) => console.error("register-user error", e))
      .finally(() => setUserLoading(false));
  }, []);

  const initials = useMemo(() => {
    if (!user) return "";
    const f = user.firstName?.[0] || "";
    const l = user.lastName?.[0] || "";
    const fromName = (f + l).trim();
    if (fromName) return fromName.toUpperCase();
    if (user.username) return user.username[0].toUpperCase();
    return "";
  }, [user]);

  const displayName = user?.firstName || user?.username || "Гость";
  const displayUsername = user?.username ? "@" + user.username : "";

  return (
    <UserContext.Provider
      value={{ user, userLoading, initials, displayName, displayUsername }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);