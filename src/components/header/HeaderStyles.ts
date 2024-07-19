
export const styles = {
    bgContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '20px 40px',
        position: 'sticky',
        top: '0',
        zIndex: 2,
        backgroundColor: '#fff'
    },
    menusContainer: {
        display: 'flex',
        gap: 3
    },
    active: {
        fontWeight: 600,
    },
    menu: {
        color: '#e0d8d1',
        '&:hover': {
            color: '#000',
        },
    },
    homeMenu: {
        display: { xs: 'none', sm: 'block' },
    },
    moreMenu: {
        display: { xs: 'block', md: 'none' },
    },
    mobileHideBox: {
        display: { xs: 'none', md: 'flex', },
        gap: { sm: 3 },
    },
    heading: {
        fontSize: { xs: '20px', sm: '25px', md: '28px' },
        fontWeight: 'bold',
    },
    loginCartContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: { xs: 'flex-start' },
        gap: { sm: 3 },
    },
    loginBtn: {
        display: { xs: 'none', sm: 'block' },
    },
    mblLoginBtn: {
        display: { xs: 'block', sm: 'none' },
        fontSize: { xs: '12px', },
    },
    cartBtn: {
        fontSize: { xs: '25px', md: '30px' },
        fontWeight: 500,
    }

}