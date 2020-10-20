import React from 'react'
import Box from '../../components/box'
import Text from '../../components/text'
import { Link as RouterLink } from 'react-router-dom'
import Link from '../../components/link'

export const PostCard = ({ post }) => {
    return (
        <Box mt="50px" mb="50px">
            <Text as="h2" className="postCard__title">{post.title}</Text>
            <Text as="span" className="postCard__date">{post.date}</Text>
            <Text as="p" className="postCard__excerpt">{post.excerpt}</Text>
            <Link variant="underscored" href="/">閱讀更多</Link>
        </Box>
    )
}