import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage/UsersPage.tsx";
import PostsPage from "../pages/PostsPage/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage/CommentsPage.tsx";
import UsersJsonPlaceholderPage from "../pages/UsersJsonPlaceholderPage/UsersJsonPlaceholderPage.tsx";
import UsersDummyJsonPage from "../pages/UsersDummyJsonPage/UsersDummyJsonPage.tsx";
import PostsJsonPlaceholderPage from "../pages/PostsJsonPlaceholderPage/PostsJsonPlaceholderPage.tsx";
import PostsDummyJsonPage from "../pages/PostsDummyJsonPage/PostsDummyJsonPage.tsx";
import CommentsJsonPlaceholderPage from "../pages/CommentsJsonPlaceholderPage/CommentsJsonPlaceholderPage.tsx";
import CommentsDummyJsonPage from "../pages/CommentsDummyJsonPage/CommentsDummyJsonPage.tsx";



export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>,
                children: [
                    {path: 'jsonplaceholder', element: <UsersJsonPlaceholderPage/>},
                    {path: 'dummyjson', element: <UsersDummyJsonPage/>}
                ]},
            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <PostsJsonPlaceholderPage/>},
                    {path: 'dummyjson', element: <PostsDummyJsonPage/>}
                ]},
            {path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <CommentsJsonPlaceholderPage/>},
                    {path: 'dummyJson', element: <CommentsDummyJsonPage/>}
                ]},

        ]
    }
])