import React from "react";
import "../styles/Cases.css";
import { useUser } from "../UserContext";
import { TitleAnimation } from "../components/TitleAnimation";

import deposit from "../assets/deposit.png";
import key from "../assets/key.png";
import ton from "../assets/ton.png";

const Cases = () => {
  const { user, userLoading, initials, displayName, displayUsername } = useUser();

  return (
    <div className="App">
      <div className="Main_Window">
        <div className="mainHomePageContainer">
          <div className="headerContainer">

            <div className="CircleAndNickNameContainer">
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

            <div className="deposit-ton-key-Container">
              <div className="depositBalanceContainer">
                <img src={deposit}/>
              </div>
              <div className="tonBalanceContainer">
                <img src={ton}/>
                <h2>192.32</h2> 
              </div>
              <div className="keyBalanceContainer">
                <img src={key}/>
                <h2>4</h2> 
              </div>
            </div>

          </div>

          <div className="titleAnimationContainer">
            <TitleAnimation />
            <h2>БЕСПЛАТНЫЕ КЕЙС</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cases;