import { createTheme } from '@mui/material/styles';
import { ExpandMore } from '@mui/icons-material';

const theme = createTheme({
    components: {        
        MuiSelect: {
            defaultProps: {
                IconComponent: ExpandMore,                
            },
            styleOverrides: {
                root: {
                    '.MuiSvgIcon-root': {
                        color: '#000',
                    }
                },
            },
        },
        MuiButton: {
            styleOverrides:{
                root: {
                    border: '1px solid #000',
                    "&:hover":{
                        border: '1px solid #000',
                    }
                },
            }
        },
    },
});
export default theme
