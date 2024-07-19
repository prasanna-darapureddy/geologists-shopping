export const styles = {
    bgContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
        padding: { xs: '10px 40px', md: '30px 150px' },
        marginTop: '50px',
        gap: 5,
    },
    contentContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { sm: 'space-around' },
        gap: { xs: 3, sm: 0 },
    },
    titleIconsBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
    },
    iconsBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
    },
    fbIcon: {
        fontSize: '24px',
    },
    heading: {
        fontSize: { xs: '20px', sm: '25px', md: '28px' },
        fontWeight: 'bold',
    },
    backBtn: {
        textTransform: 'capitalize',
        border: '1px solid #000',
        color: '#000',
        width: '120px',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        color: '#b7b7bf',
        fontWeight: 'bold',
        gap: 1.5
    },
    visaIcon: {
        fontSize: '38px',
    },
    cardIconsBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 1
    },
    freshenText: {
        fontSize: '35px',
        width: '200px',
        color: '#bbb8c4',
        fontWeight: 'light',
        padding: '0px',
    },
    acceptText: {
        color: '#000'
    },
    copyRightBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: { sm: 'flex-end' },
        color: '#bbb8c4',
    },
    copyRightText: {
        fontSize: '12px',
    },
    msgBox: {
        backgroundColor: '#f9f4f2',
        borderRadius: '10px',
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '50px',
        position: 'fixed',
        bottom: '30px',
        right: '50px',
    },
    msgIcon: {
        fontSize: '30px',
    },
    points1Box: {
    },
    points2Box: {
    },
    freshenBox: {
        gap: 1,
    }
}