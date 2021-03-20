
import React, { useState } from 'react';
import { useBorderSelectStyles } from '@mui-treasury/styles/select/border';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/541

const BorderSelect = () => {
    const [val,setVal] = useState(1);

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    const borderSelectClasses = useBorderSelectStyles();

    // moves the menu below the select input
    const menuProps = {
        classes: {
            list: borderSelectClasses.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",

        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left",
            background: "white",
        },
        getContentAnchorEl: null
    };

    const iconComponent = (props) => {

        return (
            <ExpandMoreIcon className={props.className + " " + borderSelectClasses.icon}/>
        )};


    return (
        <FormControl>
                <Select
                disableUnderline
                classes={{ root: borderSelectClasses.select}}
                labelId="inputLabel"
                IconComponent={iconComponent}
                MenuProps={menuProps}
                value={val}
                onChange={handleChange}
            >
                <MenuItem value={0}>EN</MenuItem>
                <MenuItem value={1}>RUS</MenuItem>
            </Select>
        </FormControl>
    );
};


export default BorderSelect;