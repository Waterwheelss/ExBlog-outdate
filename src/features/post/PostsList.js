import React from 'react'
import { PostCard } from './PostCard'
import { useSelector } from 'react-redux'

export const PostsList = () => {
    const posts = useSelector(state => state.posts.posts)
    return(
        <div className="container">
            {posts.slice().map((post => {
                return(
                    <PostCard 
                        post={post}
                    />
                )
            }))}
        </div>
    )
}