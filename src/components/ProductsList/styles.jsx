import styled from "styled-components";
import {device} from '../../utils/deviceInfo'

export const ProductsContainer = styled.div`
    text-align: left;
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    display: grid;
    @media ${device.mobileS} { 
        grid-template-columns: 45% 45%;
        margin: 2% 5%;
    }
    @media ${device.tablet} { 
        grid-template-columns: 22% 22% 22% 22%;
    }
   
`
