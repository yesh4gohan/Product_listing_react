import React from 'react';
import {UpArrow,ScrollTopContainer} from './styles'
const ScrollToTop = () => {
    return (
        <ScrollTopContainer 
            onClick = {()=>{window.scrollTo({
            top: 0,
            behavior: 'smooth'
            })
          }}>
            <UpArrow>&uarr;</UpArrow>
        </ScrollTopContainer>
    )
}

export default ScrollToTop;