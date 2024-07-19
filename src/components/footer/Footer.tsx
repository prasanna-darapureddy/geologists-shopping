import { Box, Button, Typography } from '@mui/material'
import { styles } from './FooterStyles'
import { Instagram } from '@mui/icons-material'
import { RiFacebookBoxLine } from "react-icons/ri";
import { TbBrandVisa } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";

function Footer() {
  return (

    <Box sx={styles.bgContainer}>
      <Box sx={styles.contentContainer}>
        <Box sx={styles.titleIconsBox}>
          <Typography sx={styles.heading}>Geologists</Typography>
          <Box sx={styles.iconsBox}>
            <Instagram />
            <RiFacebookBoxLine style={styles.fbIcon} />
            <Box component={'img'} src={'/textLogo.png'} alt='logo' />
          </Box>
          <Button variant='outlined' sx={styles.backBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', })}>Back to Top</Button>
        </Box>
        <Box sx={{ ...styles.infoBox, ...styles.points1Box }}>
          <Typography>All Products</Typography>
          <Typography>Instagram</Typography>
          <Typography>Blog</Typography>
          <Typography>Our Shops</Typography>
        </Box>
        <Box sx={{ ...styles.infoBox, ...styles.points2Box }}>
          <Typography>Shipping Policy</Typography>
          <Typography>Terms and Conditions</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Returned & Returnd Policy</Typography>
        </Box>
        <Box sx={{ ...styles.infoBox, ...styles.freshenBox }}>
          <Typography sx={styles.freshenText}>Freshen Up your day</Typography>
          <Typography sx={styles.acceptText}>WE ACCEPT</Typography>
          <Box sx={styles.cardIconsBox}>
            <TbBrandVisa style={styles.visaIcon} />
            <Box component={'img'} src={'/mastercard.png'} alt='master card' />
            <Box component={'img'} src={'/paypal.png'} alt='paypal' />
            <Box component={'img'} src={'/americanEx.png'} alt='American Express' />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.copyRightBox}>
        <Typography sx={styles.copyRightText}>© 2021 Geologists Co., All Rights Reserved</Typography>
      </Box>

      <Box sx={styles.msgBox}>
        <AiOutlineMessage style={styles.msgIcon} />
      </Box>
    </Box>

  )
}

export default Footer