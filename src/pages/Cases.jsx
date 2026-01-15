import React from "react";
import "../styles/Cases.css";
import { useUser } from "../UserContext";
import { TitleAnimation } from "../components/TitleAnimation";
import { useNavigate } from "react-router-dom";

import deposit from "../assets/deposit.png";
import key from "../assets/key.png";
import ton from "../assets/ton.png";
import ufcCaseIMG from "../assets/ufcCaseIMG.png";
import pinkCaseIMG from "../assets/pinkCaseIMG.png";
import friendsIcon from "../assets/friendsIcon.png";
import lotteryIcon from "../assets/lotteryIcon.png";
import jetGiftsIcon from "../assets/jetGiftsIcon.png";
import casesIcon from "../assets/casesIcon.png";
import upgradeIcon from "../assets/upgradeIcon.png";
import g63IMG from "../assets/g63IMG.png";
import championIMG from "../assets/championIMG.png";


const Cases = () => {
  const { user, userLoading, initials, displayName, displayUsername } = useUser();

  const items = [
    { id: 1, title: "UFC" },
    { id: 2, title: "UFC" },
    { id: 3, title: "UFC" },
    { id: 4, title: "UFC" },
  ];

  const navigate = useNavigate();

  const openCase = (id) => {
    navigate(`/case/${id}`);
  };

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

          <div className="titleAnimationContainer-cases">
            <TitleAnimation />
            <h2>БЕСПЛАТНЫЕ КЕЙСЫ</h2>
          </div>

          <div className="casesGrid">

            {items.map((item) => (
              <div key={item.id} 
                className="casesGridItem"    
                  onClick={() => openCase(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openCase(item.id)}
                >
                  <div className="caseCard">
                    <div className="caseCardImage">
                      <img src={ufcCaseIMG} />
                    </div>
                    <div className="caseCardTitle">
                      UFC
                    </div>
                    <div className="caseCardButton">
                      открыть за подписку
                    </div>
                  </div>
              </div>
            ))}

            <div className="casesGridItem" onClick={() => openCase("g63")}>
              <div className="caseCard">
                <div className="caseCardImage">
                  <img src={g63IMG} alt="" />

                  <div className="caseProgressBadge">
                    ⚡ 8 382 / 10 000
                  </div>

                  <div className="caseNewBadge">NEW</div>
                </div>

                <div className="caseCardTitle">G63</div>

                <div className="caseCardActionRow">
                  <div className="caseOpenPill">открыть за</div>

                  <div className="casePrice">
                    <span className="casePriceIconWrap ton">
                      <img src={ton} alt="" />
                    </span>
                    <span className="casePriceValue">10</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="titleAnimationContainer-cases">
            <TitleAnimation />
            <h2>ЛИМИТИРОВАННЫЕ КЕЙСЫ</h2>
          </div>

          <div className="casesGrid">

            {items.map((item) => (
              <div key={item.id} className="casesGridItem">
                  <div className="caseCard">
                    <div className="caseCardImage">
                      <img src={pinkCaseIMG} />
                    </div>
                    <div className="caseCardTitle">
                      PEPE
                    </div>
                    <div className="caseCardButton">
                      открыть за подписку
                    </div>
                  </div>
              </div>
            ))}

            {/* 2️⃣ Бесплатный кейс — за TON + progress */}
            <div className="casesGridItem" onClick={() => openCase("UFC")}>
              <div className="caseCard">
                <div className="caseCardImage">
                  <img src={ufcCaseIMG} alt="" />

                  <div className="caseProgressBadge">
                    ⚡ 782 / 1 500
                  </div>
                </div>

                <div className="caseCardTitle">UFC</div>

                <div className="caseCardActionRow">
                  <div className="caseOpenPill">открыть за</div>

                  <div className="casePrice">
                    <span className="casePriceIconWrap ton">
                      <img src={ton} alt="" />
                    </span>
                    <span className="casePriceValue">50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3️⃣ Бесплатный кйс — за ключи + NEW */}
            <div className="casesGridItem" onClick={() => openCase("Чемпион")}>
              <div className="caseCard">
                <div className="caseCardImage">
                  <img src={championIMG} alt="" />

                  <div className="caseNewBadge">NEW</div>
                </div>

                <div className="caseCardTitle">Чемпион</div>

                <div className="caseCardActionRow">
                  <div className="caseOpenPill">открыть за</div>

                  <div className="casePrice">
                    <span className="casePriceIconWrap keys">
                      <img src={key} alt="" />
                    </span>
                    <span className="casePriceValue">60</span>
                  </div>
                </div>
              </div>
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

export default Cases;