import React from 'react'
import {Stack} from '@mui/material';
import { categories} from '../utils/constants';

const selectedCategory = 'New';

const Sidebar = () => (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'}
        }}
    >
        {categories.map((category) => (
            <button
                className='category-btn'
                style={{
                    // if the category name is === to selected category, && means then, then make background color that color
                    background: category.name === selectedCategory && '#FC1505',
                    color: 'white'
                }}
                // whenever we map we must add key
                key = {category.name}
            >
                <span
                    style={{
                        color: category.name === selectedCategory ? 'white' : 'red',
                        marginRight: '15px'
                    }}
                >{category.icon}</span>

                {/* changing the opacity of selected and unselected categories */}
                <span
                    style={{opacity: category.name === selectedCategory ? '1' : 
                '0.8'}}
                >{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar
