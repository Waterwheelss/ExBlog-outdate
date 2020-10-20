import React from 'react'
import { PostsList } from '../features/post/PostsList'
import Box from '../components/box'

const HomePage = () => {
    return (
        <Box className="Home">
            <Box mt="10rem">
                <PostsList />
            </Box>
        </Box>
    )
}

export default HomePage