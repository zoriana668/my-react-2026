import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";



// router object -----

export const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children: [

            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'products', element: <ProductsPage/>}
        ]}
])



//  browser router  ----

// export const routes2 = ([
//     <BrowserRouter>
//         <Routes>
//             <Route path={'/'} element={<Layout/>}>
//                 <Route path={'/'} element={<HomePage/>}/>
//                 <Route path={'users'} element={<UsersPage/>}/>
//                 <Route path={'posts'} element={<PostsPage/>}/>
//                 <Route path={'comments'} element={<CommentsPage/>}/>
//                 <Route path={'products'} element={<ProductsPage/>}/>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// ])
