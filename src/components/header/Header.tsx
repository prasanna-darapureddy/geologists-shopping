import { Box, Typography } from '@mui/material'
import { styles } from './HeaderStyles'

function Header() {
  return (
    <>
        <Box sx={styles.bgContainer}>
            <Box sx={styles.menusContainer}>
                <Typography sx={{...styles.menu, ...styles.homeMenu}}>Home</Typography>
                <Typography sx={{...styles.menu, ...styles.moreMenu}}>More</Typography>
                <Box sx={styles.mobileHideBox}>
                    <Typography sx={styles.active}>Shop</Typography>
                    <Typography sx={styles.menu}>Blog</Typography>
                    <Typography sx={styles.menu}>Contact Us</Typography>
                </Box>
            </Box>
            <Typography sx={styles.heading}>Geologists</Typography>
            <Box sx={styles.loginCartContainer}>
                <Typography sx={styles.loginBtn}>Login</Typography>
                <Typography sx={styles.cartBtn}>Cart</Typography>
                <Typography sx={styles.mblLoginBtn}>Login</Typography>
            </Box>
        </Box>
    </>
  )
}

export default Header