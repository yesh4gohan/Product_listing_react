import styled from "styled-components";
import {device} from '../../utils/deviceInfo'
export const TileContainer = styled.div`
    text-align: left;
    background-color: #fff;
    width: 90%;
    border-radius: 5px;
    margin: 2%;
    display:flex;
    flex-direction:column;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    padding:2%;
`

export const TileImg = styled.img`
    width:100%;
    max-width:178px;
    max-height:160px;
    display:inline-block;
    align-items:center;
    margin:2%;
`

export const TileHeading = styled.div`
    font-weight:bold;
    text-align:left;
    margin:2%;
    @media ${device.mobileS} { 
        font-size:4vw;
    }
    @media ${device.tablet} { 
        font-size:1.5vw;
    }
    @media ${device.laptopL} {
        font-size:1vw;
    }
`

export const TileDesc = styled.div`
    text-align:left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;  
    margin:2%;
    @media ${device.mobileS} { 
        font-size:3vw;
    }
    @media ${device.tablet} { 
        font-size:1vw;
    }
    @media ${device.laptopL} {
        font-size:0.8vw;
    }
`

export const SizeTile = styled.div`
    text-align:left;
    margin:2%;
    @media ${device.mobileS} { 
        font-size:3vw;
    }
    @media ${device.tablet} { 
        font-size:1vw;
    }
    @media ${device.laptopL} {
        font-size:0.8vw;
    }
`