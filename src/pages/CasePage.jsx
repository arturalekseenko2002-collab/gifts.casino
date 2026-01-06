import React from "react";
import "../styles/CasePage.css";
import { useUser } from "../UserContext";
import { TitleAnimation } from "../components/TitleAnimation";
import { useParams } from "react-router-dom";

import deposit from "../assets/deposit.png";
import key from "../assets/key.png";
import ton from "../assets/ton.png";
import casesIcon from "../assets/casesIcon.png";
import friendsIcon from "../assets/friendsIcon.png";
import jetGiftsIcon from "../assets/jetGiftsIcon.png";
import lotteryIcon from "../assets/lotteryIcon.png";
import upgradeIcon from "../assets/upgradeIcon.png";
import g63IMG from "../assets/g63IMG.png";

const CasePage = () => {

  const { id } = useParams();
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
                            <h2>0.00</h2> 
                        </div>
                        <div className="keyBalanceContainer">
                            <img src={key}/>
                            <h2>4</h2> 
                        </div>
                        </div>

                    </div>

                    <div className="titleAnimationContainer">
                        <TitleAnimation />
                        <h2>{id}</h2>
                    </div>

                    <div className="caseCardOpened">
                        <div className="caseCardOpenedImage">
                            <img src={g63IMG} alt="" />
                        </div>
                    </div>

                    <div className="notifActivation">
                        не хватает 7
                        <div className="notifActivationImage">
                            <img src={key} alt="" />
                        </div>
                    </div>

                    <div className="footerContainer">

                        <div className="footerInner">
                        <div className="footerNav">
                            <div className="footerItem">
                            <img src={lotteryIcon} />
                            <span>Лотереи</span>
                            </div>
                            <div className="footerItem">
                            <img src={upgradeIcon} />
                            <span>Апгрейды</span>
                            </div>
                            <div className="footerItem active">
                            <img src={casesIcon} alt="" />
                            <span>Кейсы</span>

                            <img
                                className="footerActiveAnim"
                                src="https://mycs2.pro/public/video/fire_orange.webp?v=3"
                                alt=""
                            />
                            </div>
                            <div className="footerItem">
                            <img src={friendsIcon} />
                            <span>Друзья</span>
                            </div>
                            <div className="footerItem">
                            <img src={jetGiftsIcon} />
                            <span>Jet Gifts</span>
                            </div>
                        </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CasePage;