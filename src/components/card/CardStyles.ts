export const styles = {
    cardBox:{
        display:'flex',
        flexDirection:'column',
        transition: 'scale 1s',
    },
    thumbnail:{
        height:'250px',
        width:'100%',
        border:'1px solid #c8c8c8',
        "&:hover":{
            scale:'90%',
            transistion:'scale ease-in'
        }
    },
    contentBox:{
        color:'#646461',
    },
    title:{
        fontSize:{xs:'14px', sm:'18px',},
        fontWeight:500,
        color:'#000',
    },
  
}