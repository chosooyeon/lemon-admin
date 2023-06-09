import { atom } from "recoil";

const sideBar = atom({
    key: "sideBar",
    default: true
});

export {sideBar}