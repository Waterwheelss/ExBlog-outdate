import React from 'react'

export const PostCard = ({post}) => {
    return(
        <article className="postCard">
            <h2 className="postCard__title">{post.title}</h2>
            <span className="postCard__date">{post.date}</span>
            <p className="postCard__excerpt">{post.excerpt}</p>
            <a href="/" className="postCard__link">閱讀更多</a>
        </article>
    )
}