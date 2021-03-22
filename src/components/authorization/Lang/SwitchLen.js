import React, {useState} from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {InputBase, makeStyles, withStyles} from "@material-ui/core";


const BootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 4,
        position: 'relative',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        color: "white",
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);


const SwitchLen = () => {
    const [val, setVal] = useState(1);

    const handleChange = (event) => {
        setVal(event.target.value);
    };
    const useStyles1 = makeStyles({
        select: {
            "& ul": {
                backgroundColor: "#60a29b",
                color: "white"
            },
            "& li": {
                fontSize: 12,
                color: "white",
                background: "#60a29b"
            },
        },
    });
    const minimalSelectClasses = useStyles1();

    const iconComponent = (props) => {
        return (
            <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon}/>
        )
    };


    // moves the menu below the select input
    const menuProps = {
        classes: {
            paper: minimalSelectClasses.select,
            list: minimalSelectClasses.list,
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },

        getContentAnchorEl: null
    };


    return (
        <FormControl>
            <Select
                classes={{root: minimalSelectClasses.select}}
                MenuProps={menuProps}
                IconComponent={iconComponent}
                input={<BootstrapInput/>}
                value={val}
                onChange={handleChange}
            >
                <MenuItem value={0}>EN</MenuItem>
                <MenuItem value={1}>RUS</MenuItem>
            </Select>
        </FormControl>
    );
};


export default SwitchLen;