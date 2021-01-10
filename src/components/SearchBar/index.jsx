import React from 'react';
import {SearchBar,SearchBarContainer,SearchButton,ClearButton} from './styles'
import {fetchSearchResult} from '../../Network/fetchHelper'

const SearchComponent = (props) => {
    const {setSearchResults,setSearchSuccess} = props
    const [val,setVal] = React.useState("");
    const handleSearch = async () => {
        const {status,results} = await fetchSearchResult(val);
        if(status === 'failed'){
            setSearchSuccess(false);
        }
        else {
            setSearchSuccess(true);
        }
        setSearchResults(results);
    }
    const handleClear = () => {
        setVal('');
        setSearchResults([])
    }
    return (
        <SearchBarContainer>
            <ClearButton onClick={handleClear} disabled = {val === ""}>Clear</ClearButton>

            <SearchBar type="text" value = {val} onChange = {(e)=>setVal(e.target.value)} placeholder = "Search for a product"/>
            
            <SearchButton onClick={handleSearch} disabled = {val === ""}>Search</SearchButton>
        </SearchBarContainer>
    )
}

export default SearchComponent;