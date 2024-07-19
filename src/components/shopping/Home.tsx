import Sidebar from './Sidebar'
import Shopping from './Shopping'
import { Box } from '@mui/material'
import { styles } from './ShoppingStyles'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <Box sx={styles.bgContainer}>
                <Sidebar />
                <Shopping />
            </Box>
            <Footer />
        </>
    )
}
