import React from 'react';

 export const Footer = () => {
     const styles={
         big:{
             height:'10vh',
             width:'100vw',
             display:'flex',
             justifyContent:'center',
             alignItems:'center'
         }
     }
     return(
         <div style={styles.big}>
             made with love by Nest Academy
         </div>
     )
 }