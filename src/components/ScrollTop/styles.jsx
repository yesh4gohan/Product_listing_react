import styled from "styled-components";
import {device} from '../../utils/deviceInfo'

export const ScrollTopContainer = styled.div`
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    border-radius: 5px;
    position: -webkit-sticky;
    position: sticky;
    position: -webkit-sticky;
    /* left: 0; */
    bottom: 10px;
    background-color: lightgray;
    padding: 5%;
    float: right;
    margin-right: 35px;
    @media ${device.mobileS} { 
        width:4vw;
        height:4vw;
    }
    @media ${device.tablet} { 
        width:0.8vw;
        height:0.8vw;
    }
    @media ${device.laptopL} {
        width:0.8vw;
        height:0.8vw;
    }
`
export const UpArrow = styled.span`
    display:inline;
    font-size:5vw;
    position: absolute;
    left: 33%;
    bottom: 25%;
`


