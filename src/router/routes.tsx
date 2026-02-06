import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage/UsersPage.tsx";
import PostsPage from "../pages/PostsPage/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage/CommentsPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>,
                children: [
                    {path: 'jsonplaceholder', element: <div>jsonPlaceholder</div>},
                    {path: 'dummyjson', element: <div>dummyJson</div>}
                ]},
            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>jsonPlaceholder</div>},
                    {path: 'dummyjson', element: <div>dummyJson</div>}
                ]},
            {path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>jsonPlaceholder</div>}
                ]}

        ]
    }
])