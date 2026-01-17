import { useState, useEffect, useRef } from "react";
import "../styles/CasePage.css";
import { useUser } from "../UserContext";
import { TitleAnimation } from "../components/TitleAnimation";
import { useParams } from "react-router-dom";

import deposit from "../assets/deposit.png";
import key from "../assets/key.png";
import ton from "../assets/ton.png";
import backButton from "../assets/backButton.png";
import casesIcon from "../assets/casesIcon.png";
import friendsIcon from "../assets/friendsIcon.png";
import jetGiftsIcon from "../assets/jetGiftsIcon.png";
import lotteryIcon from "../assets/lotteryIcon.png";
import upgradeIcon from "../assets/upgradeIcon.png";
import g63IMG from "../assets/g63IMG.png";

const CasePage = () => {

  const { id } = useParams();
  const { user, userLoading, initials, displayName, displayUsername } = useUser();

  const [isRolling, setIsRolling] = useState(false);
  const [rollOffset, setRollOffset] = useState(0);

    const items = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        name: `Item ${i}`,
        image: g63IMG, // временно одно изображение
        price: 100 + i,
    }));

    useEffect(() => {
        if (!isRolling) return;

        const itemWidth = 196; // 180 + gap
        const winIndex = 15;   // условно

        const centerOffset = 
            -(winIndex * itemWidth) +
            window.innerWidth / 2 -
            itemWidth / 2;

        setTimeout(() => {
            setRollOffset(centerOffset);
        }, 50);
    }, [isRolling]);

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

                    <div className="titleAnimationContainer-CasePage">

                        <TitleAnimation />

                        <div className="backButton-desktop">
                            <img src={backButton} alt="" />
                            Вернуться 
                        </div>

                        <h2>{id}</h2>

                        <div className="demoMode-desktop">
                            Демо режим 
                            <div className="demo-switch-container-desktop">
                                <div className="demo-switcher-desktop">

                                </div>
                            </div>
                        </div>

                    </div>

                    {!isRolling && (
                        <div className="caseCardOpened">
                            <div className="caseCardOpenedImage">
                                <img src={g63IMG} alt="" />
                            </div>
                        </div>
                    )}


                    {isRolling && (
                    <div className="caseRollContainer">
                        <div
                        className="caseRollTrack"
                        style={{ transform: `translateX(${rollOffset}px)` }}>
                            {items.map((item, i) => (
                                <div className="rollItem" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <div className="rollItemTitle">{item.name}</div>
                                    <div className="rollItemPrice">{item.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    )}

                    <div className="notifActivation">
                        <div className="notifActivationImage">
                            <img src={key} alt="" />
                        </div>
                        10 (У вас не хватает 6)
                    </div>

                    <div className="demoMode">
                        Демо режим 
                        <div className="demo-switch-container">
                            <div className="demo-switcher">

                            </div>
                        </div>
                    </div>

                    <div className="opening-amount-container">
                        Сколько кейсов открыть? 
                    </div>

                    <div class="openCount">
                        <button class="openCountItem">1</button>
                        <button class="openCountItem active">2</button>
                        <button class="openCountItem">3</button>
                        <button class="openCountItem">4</button>
                        <button class="openCountItem">5</button>
                    </div>

                    <div className="openCaseButton"  onClick={() => setIsRolling(true)}>
                        Открыть кейс
                        <div className="openCaseButtonImage">
                            <img src={key} alt="" />
                        </div>
                        10
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