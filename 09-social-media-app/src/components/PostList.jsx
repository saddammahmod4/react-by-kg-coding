import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage'
import LoadingSpinner from './LoadingSpinner'

function PostList() {

  const { postList, addInitialPost } = useContext(PostListData)
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true)
    fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      addInitialPost(data.posts);
      setFetching(false)
    });
  }, [])

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList