import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    // function for placing searched term in params
    const onHandleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            // use navigate hook provided to navigate to this specific url
            navigate(`/search/${searchTerm}`);
        }
        // reseting the url after navigating
        setSearchTerm('');
    }

    return (
        // Paper is a div w/ white background and elevation from mui, floating like
        <Paper
            component="form"
            onSubmit={onHandleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton
                type="submit"
                sx={{ p: '10px', color: 'red' }}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
