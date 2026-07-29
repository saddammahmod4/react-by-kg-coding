import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "Going to Mumbai",
        body: "Hi friends, I am going to mumbai.",
        reactions: 2,
        userId: "user-9",
        tags: ["Vacation", "Mumbai", "Enjoing"]
    },
    {
        id: "2",
        title: "Going to Dubai",
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
    if (action.type === "ADD_POST") {
        console.log("action.payload", action.payload)
        newPostList = [action.payload, ...currentPostList]
    }
    else if (action.type === "DELETE_POST") {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    }
    return newPostList
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        })
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