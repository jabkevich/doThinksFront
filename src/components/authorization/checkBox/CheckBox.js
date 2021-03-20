import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon';

const NeonCheckboxStyle = () => {
    const neonStyles = useNeonCheckboxStyles();
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        disableRipple
                        classes={neonStyles}
                        checkedIcon={<span />}
                        icon={<span />}
                    />
                }
                label={'Remember me'}
            />
        </div>
    );
};

export default NeonCheckboxStyle;