import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
    {
        id: "1",
        titile: "Going to Mumbai",
        body: "Hi friends, I am going to mumbai.",
        reactions: 2,
        userId: "user-9",
        tags: ["Vacation", "Mumbai", "Enjoing"]
    },
    {
        id: "2",
        titile: "Going to Dubai",
        body: "Hi friends, I am going to Dubai.",
        reactions: 15,
        userId: "user-12",
        tags: ["Vacation", "Dubai", "Mood Fresh"]
    },
]

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList
    if (action.type === "DELETE_POST") {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    }
    return newPostList
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = () => {

    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            }
        })
    }

    return (
        <PostList.Provider value={{postList, addPost, deletePost}}>
            { children }
        </PostList.Provider>
    )
}

export default PostListProvider