import { AppStoreContext } from "../contexts/appStoreContext";
import { useContext } from "react";

export const useAppStore = () => useContext(AppStoreContext);
