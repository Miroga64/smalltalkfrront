import { useContext } from "react";
import { CurtainControlContext } from "../contexts/curtainControlContext";

export const useCurtainControl = () => useContext(CurtainControlContext);
