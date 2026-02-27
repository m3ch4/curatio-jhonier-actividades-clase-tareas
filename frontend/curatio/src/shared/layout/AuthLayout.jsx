import { Outlet} from "react-router-dom";
import authBg from "../../assets/images/auth-background.jpg"
import UserForm from "../../features/users/components/UserForm";
// import heroBg from "@/assets/images/imagen-hero.jpg"

export default function AuthLayout(){

        return(
            <div             
                className="relative min-h-screen w-full flex items-center justify-center text-black"
                style={{
                    backgroundImage: `url(${authBg})`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}>

                


                {/*Contenido que se inyecta*/}
                <main className="mx-auto max-w7">
                    <Outlet />
                    <UserForm   />
                </main>
            </div>

        );
};