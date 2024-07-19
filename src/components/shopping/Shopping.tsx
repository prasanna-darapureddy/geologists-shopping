import { Box, CircularProgress, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import { styles } from './ShoppingStyles'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/Store';
import { useEffect, } from 'react';
import { fetchShoppingProducts, getSelectedValue, sortShoppingList } from '../../slice/Slice';
import CardItem from '../card/CardItem';
export const useAppDispatch = () => useDispatch<AppDispatch>()

function Shopping() {
  const { shoppingList, apiStatus, sortValue } = useSelector((store: RootState) => store.shoppingList)
  const dispatch = useAppDispatch()
  dispatch(sortShoppingList(sortValue))

  useEffect(() => {
    dispatch(fetchShoppingProducts())
  }, [dispatch])

  const loadingView = () => {
    return (
      <Box sx={styles.loaderBox}>
        <CircularProgress />
      </Box>
    )
  }

  const failedView = () => {
    return (
      <Box sx={styles.failedBox}>
        <Box component={'img'} src={'/failure.png'} alt="failed" />
        <Typography>!Oops Something Went Wrong</Typography>
      </Box>
    )
  }

  const successView = () => {
    return (
      <Grid container spacing={2} width={'100%'}>
        {shoppingList?.map(eachItem => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={eachItem.id}>
            <CardItem eachItemDetails={eachItem} key={eachItem.id} />
          </Grid>
        ))}
      </Grid>
    )
  }

  const shoppingProductsView = () => {
    switch (apiStatus) {
      case 'loading':
        return loadingView();
      case 'succeeded':
        return successView();
      case 'failed':
        return failedView();
      default:
        return loadingView();
    }
  }

  return (
    <Box sx={styles.rightContainer}>
      <FormControl sx={styles.sortBox}>
        <Select sx={styles.sortBy}
          onChange={(event) => dispatch(getSelectedValue(event.target.value))}
          value={sortValue}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'Sort by'}><em>Sort by</em></MenuItem>
          <MenuItem value={'LowToHigh'}>Price (low to high)</MenuItem>
          <MenuItem value={'HighToLow'}>Price (high to low)</MenuItem>
          <MenuItem value={'AToZ'}>Title A-Z</MenuItem>
          <MenuItem value={'ZToA'}>Title Z-A</MenuItem>
        </Select>
      </FormControl>
      <Box sx={styles.productsBox}>
        {shoppingProductsView()}
      </Box>
    </Box>
  )
}
export default Shopping