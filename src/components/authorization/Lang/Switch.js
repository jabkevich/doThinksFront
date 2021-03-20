import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "./switch.scss"
const useStyles = makeStyles({
    classForDisabled: {
        color: "red"
    }
});
export default function Switches() {
    return (
        <div className={styles.materialSwitch}>
            <input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox"/>
            <label htmlFor="someSwitchOptionDefault"></label>
        </div>
    );
}