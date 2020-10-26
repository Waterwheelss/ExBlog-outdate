import React, { useState } from 'react'
import PostToolBar from './PostToolBar'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import Box from '../../components/box'

const PostEditor = () => {
    const [html, setHtml] = useState('')
    const mdParser = new MarkdownIt();
    return (
        <Box>
            <PostToolBar />
            <MdEditor
                style={{ height: "calc(100vh - 70px)" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={({html}) => setHtml(html)}
                placeholder="Start to note here"
            />
        </Box>
    )
}

export default PostEditor