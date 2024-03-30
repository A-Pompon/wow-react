import React from 'react';
import {Route, Routes} from "react-router-dom";
import UserLayout from "./UserLayout";
import Home from "./core/Home";
import Profil from "./users/Profil";
import NotFound from "./core/NotFound";
import {DonjonProvider} from "../../contexts/DonjonProvider";
import Donjon from "./games/Donjon";
import LevelDonjon from "./games/components/LevelDonjon";
import GameDonjon from "./games/components/GameDonjon";
import EndDonjon from "./games/components/EndDonjon";
import Classement from "./users/Classement";
import FriendDetails from "./users/FriendDetails";
import Friends from "./users/Friends";
import UserUpdateRace from "./users/UserUpdateRace";
import UserUpdateName from "./users/UserUpdateName";
import UserClassementDetails from "./users/UserClassementDetails";

const DonjonRoutes = () => (
    <DonjonProvider>
        <Routes>
            <Route path="/" element={<Donjon/>} errorElement={<NotFound/>}>
                <Route index element={<LevelDonjon/>}/>
                <Route path="game" element={<GameDonjon/>}/>
                <Route path="end" element={<EndDonjon/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    </DonjonProvider>
);

const ClassementRoutes = () => (
    <Routes>
        <Route index element={<Classement/>} errorElement={<NotFound/>}/>
        <Route path="/user/:userIdParams" element={<UserClassementDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
);

const FriendsRoutes = () => (
    <Routes>
        <Route index element={<Friends/>} errorElement={<NotFound/>}/>
        <Route path="/friend/:userId" element={<FriendDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
);

const ProfilRoutes = () => (
    <Routes>
        <Route index element={<Profil/>} errorElement={<NotFound/>}/>
        <Route path="/update/race" element={<UserUpdateRace/>}/>
        <Route path="/update/name" element={<UserUpdateName/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
);


const UserRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<UserLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/classement/*" element={<ClassementRoutes/>}/>
                    <Route path="/donjon/*" element={<DonjonRoutes/>}/>
                    <Route path="/friends/*" element={<FriendsRoutes/>}/>
                    <Route path="/profil/*" element={<ProfilRoutes/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default UserRouter;
