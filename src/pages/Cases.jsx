import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cases.css";
import { useUser } from "../UserContext";

const Cases = () => {
    return (
    <div className="App">
        <div className="Main_Window">   
            <div className="mainHomePageContainer">  
                <div className="headerContainer">
                    <div className="circleInHeaderContainer">
                        {user?.photoUrl ? (
                            <img src={user.photoUrl} className="userAvatar"/>
                        ) : (
                            <div className="circleName">
                                {userLoading ? "" : initials}
                            </div>
                        )}
                    </div>
                    <div className="nickNameContainer">
                        <div className="nickNameContainerPart1">{userLoading ? "Загрузка" : displayName}</div>
                        <div className="nickNameContainerPart2">{userLoading ? "" : displayUsername}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

export default Cases;