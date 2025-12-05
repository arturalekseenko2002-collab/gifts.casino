import React from "react";
import "../styles/Cases.css";

const Cases = () => {
  // ВРЕМЕННЫЕ заглушки, пока нет контекста и бэка
  const user = null;
  const userLoading = false;
  const initials = "";
  const displayName = "";
  const displayUsername = "";

  return (
    <div className="App">
      <div className="Main_Window">
        <div className="mainHomePageContainer">
          <div className="headerContainer">
            <div className="circleInHeaderContainer">
              {user?.photoUrl ? (
                <img src={user.photoUrl} className="userAvatar" />
              ) : (
                <div className="circleName">
                  {userLoading ? "" : initials}
                </div>
              )}
            </div>
            <div className="nickNameContainer">
              <div className="nickNameContainerPart1">
                {userLoading ? "Загрузка" : displayName}
              </div>
              <div className="nickNameContainerPart2">
                {userLoading ? "" : displayUsername}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;