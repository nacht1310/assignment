import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

function Post({data}) {
  return (
    <div className='post-container'>
        {data.length ? (
            data.map((post) => {
                const link = '/detail-' + post.id
                return(
                    <Link className='post' to={link}>
                        <p>{post.title}</p>
                        <p>{post.date.toUTCString()}</p>
                    </Link>
                )
            })
        )
            :
        (
            <div>
                There is no post
            </div>
        )}

        <Link className='button' to='/add' >Add a post</Link>
    </div>
  )
}

export default Post