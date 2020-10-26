import React from 'react'
import { PostsList } from '../features/post/PostsList'
import Box from '../components/box'
import NavBar from './Navbar'

const HomePage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Box className="Home">
                <Box mt="10rem">
                    <PostsList />
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default HomePage