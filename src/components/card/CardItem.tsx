import { Box, Grid, Typography } from '@mui/material'
import { styles } from './CardStyles'

interface IProps {
    eachItemDetails: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }

}

function CardItem(props: IProps) {
    const { eachItemDetails } = props

    return (
        <>
            <Box component={'img'} src={eachItemDetails.thumbnail} alt='product' sx={styles.thumbnail} />
            <Box sx={styles.contentBox}>
                <Typography sx={styles.title}>{eachItemDetails.title}</Typography>
                <Typography>${eachItemDetails.price}</Typography>
            </Box>
        </>
    )
}
export default CardItem