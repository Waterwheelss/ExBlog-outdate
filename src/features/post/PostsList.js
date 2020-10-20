import React from 'react'
import { PostCard } from './PostCard'
import { useSelector } from 'react-redux'
import Box from '../../components/box'

export const PostsList = () => {
    const posts = useSelector(state => state.posts.posts)
    return(
        <Box maxWidth="980px" m="auto">
            {posts.slice().map((post => {
                return(
                    <PostCard 
                        post={post}
                    />
                )
            }))}
        </Box>
    )
}