import styled from "styled-components";
export const SearchBarContainer = styled.div`
width: 75%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 30px;
    border-radius: 5px;
    border: solid 1px #eaeaea;
    background-color: #f8f8f8;
    padding: 1%;
    vertical-align: middle;
    position: relative;
    /* left: 1%; */
    margin: 10%;
`

export const SearchBar = styled.input`
    color: #000;
    font-size: 16px;
    height: 1.5rem;
    width: 90%;
    box-shadow: none;
    border: none;
    background: transparent;
    margin: 0;
    border-radius: 25px;
    padding: 0 0 0 10%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    :focus {
        outline-width: 0;
    }
    ::placeholder {
        font-size: 12px;
    }
    cursor: pointer;
`

export const SearchButton = styled.button`
    position: relative;
    background-color: cadetblue;
    border:1px solid cadetblue;
    border-radius:5px;
`

export const ClearButton = styled.button`
    position: relative;
    background-color: darkorange;
    border:1px solid darkorange;
    border-radius:5px;
`