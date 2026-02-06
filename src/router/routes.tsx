import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersComponent from "../components/users/UsersComponent.tsx";
import PostComponent from "../components/posts/PostComponent.tsx";
import CommentsComponent from "../components/comments/CommentsComponent.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersComponent/>,
                children: [
                    {path: 'jsonplaceholder', element: <div>jsonPlaceholder</div>},
                    {path: 'dummyjson', element: <div>dummyJson</div>}
                ]},
            {path: 'posts', element: <PostComponent/>, children: [
                    {path: 'jsonplaceholder', element: <div>jsonPlaceholder</div>},
                    {path: 'dummyjson', element: <div>dummyJson</div>}
                ]},
            {path: 'comments', element: <CommentsComponent/>, children: [
                    {path: 'jsonplaceholder', element: <div>jsonPlaceholder</div>}
                ]}

        ]
    }
])