import { Remove, Add } from '@mui/icons-material'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Slider } from '@mui/material'
import { useState } from 'react'
import { accordianExpand } from '../../slice/Slice'
import { styles } from './ShoppingStyles'
import { useAppDispatch } from './Shopping'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Store'

export default function Sidebar() {
    const [value, setValue] = useState<number[]>([0, 100]);
    const { accordianList } = useSelector((store: RootState) => store.shoppingList)
    const dispatch = useAppDispatch()

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <Box sx={styles.leftContainer}>
            <Typography sx={styles.filterText}>Filter by</Typography>
            {accordianList.map(eachItem => (
                <Accordion key={eachItem.id} sx={styles.accordion} disableGutters square elevation={0}>
                    <AccordionSummary
                        onClick={() => dispatch(accordianExpand(eachItem.id))}
                        expandIcon={eachItem.isOpened ? <Remove /> : <Add />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        {eachItem.title}
                    </AccordionSummary>
                    <AccordionDetails>
                        {eachItem.title === 'Price' ?
                            <>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    sx={styles.slider}
                                    size={'small'}
                                />
                                <Box sx={styles.priceRange}>
                                    <Typography>Low $0</Typography>
                                    <Typography>High $100</Typography>
                                </Box>
                            </>
                            :
                            <>
                                <Typography>All</Typography>
                                <Typography>Raw Crystals</Typography>
                                <Typography>Wood Defusers</Typography>
                                <Typography>Defusers</Typography>
                            </>
                        }
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}
