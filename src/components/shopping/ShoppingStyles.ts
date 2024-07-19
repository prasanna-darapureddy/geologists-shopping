
export const styles = {
    bgContainer: {
        display: 'flex',
        padding: { xs: '10px 40px', md: '10px 150px' },
        gap: 2,
        marginTop: '20px',
    },
    leftContainer: {
        width: { xs: '50%', md: '30%' },
        minWidth: { xs: '50%', md: '300px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
    },
    filterText: {
        borderBottom: '1px solid #c8c8c8',
        padding: '20px 15px',
        fontSize: { xs: '15px', sm: '20px', md: '25px' }
    },
    accordion: {
        padding: '10px 0px',
        shadow: 'none',
        borderBottom: '1px solid #d3d3d2',
    },
    sortBox: {
        display: 'flex',
        alignItems: 'flex-end',
        borderRadius: '0px',
        "& .MuiOutlinedInput-root fieldset": {
            display: 'none',
            padding: '0px'
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: '0px',
            border: "1px solid #000",
            backgroundColor: '#f9f4f2',
            padding: '0px',
        },
        "& .MuiOutlinedInput-input": {
            padding: '10px',
        }
    },
    sortBy: {
        width: { xs: '150px', sm: '200px', md: '220px' },
    },
    slider: {
        color: '#4e4e4d',
        height: '3px',
    },
    priceRange: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    productsBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    failedBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: '100%',
    },
    loaderBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        alignSelf: 'center',
    },
    cardBox: {
        display: 'flex',
        flexDirection: 'column',
        transition: 'scale 1s',
    },
}