import React from 'react'
import Box from '../components/box'
import PostEditor from '../features/post/PostEditor'
import 'react-markdown-editor-lite/lib/index.css'
import './editorOverride.css'

const PostEditPage = () => {
    return (
        <Box>
            <PostEditor />
        </Box>
    )
}

export default PostEditPage