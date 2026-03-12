import {createBrowserRouter} from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"
import ProfilePage from "../../features/users/pages/ProfilePage";
import HomePage from "../../features/home/pages/HomePage";
import AuthLayout from "@/layouts/AuthLayout";
import ConfigUserPage from "../../features/users/pages/ConfigUserPages";
import ListUserPage from "../../features/users/pages/ListUserPage";
import CreateUserPage from "../../features/users/pages/CreateUserPage";
const router = createBrowserRouter([
    {
            element:<MainLayout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path:"usuario",
                    element: <ConfigUserPage/>
                },
                {
                    path:"tabla",
                    element: <ListUserPage/>
                },
                {
                    path:"/users/:id/edit",
                    element: <CreateUserPage/>
                },
                {
                    path:"perfil",
                    element: <ProfilePage/>
                },
        ]
    },
    {
            element:<AuthLayout/>,
            children: [
                {
                    path: "login",
                    element: <AuthLayout />
                },
                {
                    path:"Forgot-password",
                    element: <h1 className="p-4">Recuperar mi contraseña</h1>
                },
                {
                    path:"reset-password",
                    element: <h1 className="p-4">Resetear mi contraseña</h1>
                },
                
        ]
    }
])

export default router;