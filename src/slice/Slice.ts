import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const accordionData = [
    {
        id: 1,
        title: 'Category',
        isOpened: false,
    },
    {
        id: 2,
        title: 'Price',
        isOpened: false,
    },
    {
        id: 3,
        title: 'Crystol',
        isOpened: false,
    },
    {
        id: 4,
        title: 'Essential Oil',
        isOpened: false,
    },
    {
        id: 5,
        title: 'Packing',
        isOpened: false,
    },
    {
        id: 6,
        title: 'Size',
        isOpened: false,
    },
]

export interface shoppingListState {
    shoppingList: {
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
    }[],
    accordianList: {
        id: number,
        title: string,
        isOpened: boolean,
    }[],
    apiStatus: string;
    sortValue: string;
}

const initialState: shoppingListState = {
    shoppingList: [],
    accordianList: accordionData,
    apiStatus: "initial",
    sortValue: "Sort by",
};

export const fetchShoppingProducts = createAsyncThunk('shoppingList/fetchData', async () => {
    try {
        const data = await fetch('https://dummyjson.com/products')
        const response = await data.json()
        return response.products
    }
    catch (err) {
        initialState.apiStatus = 'failed';
    }
})

export const ShoppingListSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        sortShoppingList: (state, action) => {
            if (action.payload === 'LowToHigh') {
                state?.shoppingList.sort((firstObj, secondObj) => firstObj.price - secondObj.price)
            } else if (action.payload === 'HighToLow') {
                state?.shoppingList.sort((firstObj, secondObj) => secondObj.price - firstObj.price)
            } else if (action.payload === 'AToZ') {
                state?.shoppingList.sort((firstObj, secondObj) => firstObj.title.localeCompare(secondObj.title))
            } else if (action.payload === 'ZToA') {
                state?.shoppingList.sort((firstObj, secondObj) => secondObj.title.localeCompare(firstObj.title))
            }
        },
        getSelectedValue: (state, action) => {
            state.sortValue = action.payload
        },
        accordianExpand: (state, action) => {
            const updatedList = state.accordianList.map(eachItem => {
                if (eachItem.id === action.payload) {
                    return { ...eachItem, isOpened: !eachItem.isOpened }
                } else {
                    return eachItem
                }
            })
            state.accordianList = updatedList
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchShoppingProducts.pending, (state) => {
                state.apiStatus = 'loading'
            })
            .addCase(fetchShoppingProducts.fulfilled, (state, action) => {
                state.apiStatus = 'succeeded'
                state.shoppingList = action.payload
            })
            .addCase(fetchShoppingProducts.rejected, (state,) => {
                state.apiStatus = 'failed'
            })
    }
})
export const { sortShoppingList, getSelectedValue, accordianExpand } = ShoppingListSlice.actions
export default ShoppingListSlice.reducer;