import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <Avatar
                className="post__avatar"
                // alt={username}
                src="/static/images/avatar/1.jpg"
            />
            <h3>Username</h3>

            <img className="post__image" src="../logo512.png" alt="" />

            <h4 className="post__text"><strong>DixV</strong> instagram clone day!!...</h4>

        </div>
    )
}

export default Post
