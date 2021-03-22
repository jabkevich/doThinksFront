
import React from 'react';
import styles from "./style.modules.scss"
import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon';

const NeonCheckboxStyle = () => {
    const neonStyles = useNeonCheckboxStyles();
    return (
        <div className="checkbox">
            <input className={styles.customCheckbox} type="checkbox" id="color-1" name="color-1" value="indigo"/>
                <label htmlFor="color-1">Remember me</label>
        </div>
    );
};

export default NeonCheckboxStyle;