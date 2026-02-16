//Se comenta para que no entre en conflicto con el CreateUserPage, que es el que se va a mostrar en la pagina de crear usuario
//import UserForm from "../features/users/components/UserForm";
import CreateUserPage from "../features/users/pages/CreateUserPage";

export default function App() {

    return(
        <div className="grid grid-cols-1 gap-6  justify-items-center">
            <h1 className="text-3xl font-bold text-center text-label">
                Crear Usuario - Datos basicos              
            </h1>

            <div>
                {/* <UserForm />  */}
                <CreateUserPage/>
            </div>
        </div>
    )
}