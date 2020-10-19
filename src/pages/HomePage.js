import React from 'react'
import { PostsList } from '../features/post/PostsList'

const HomePage = () => {
    return (
        <div className="Home">
            <div className="mt-10">
                <PostsList />
            </div>
        </div>
    )
}

export default HomePage