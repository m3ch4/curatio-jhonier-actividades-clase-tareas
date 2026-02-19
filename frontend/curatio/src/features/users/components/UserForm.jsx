import Input from "@/shared/components/Input";
import Buttom from "../../../shared/components/Button";


export default function UserForm() {
  const handleNameChange = (e) => {
    console.log("Nombre del usuario", e.target.value);  {/*Almacenar el ingreso de datos en un input*/}
    
  };

  const handleEmailBlur = (b) => {                      {/*Hace referencia a cuando yo salgo del input*/}
  console.log("Email del usuario", b.target.value);
  };

  const handleButtonSubmit = (s) => {                      {/*Hace referencia a cuando yo salgo del input*/}
  console.log("Email del usuario", s.target.value);
  };
  
  

  return (
    <div>
      {/*Formulario para crear el usuario REALIZADO POR JHONIER G */}

      <form>
        {/*DATOS BASICOS */}
        <Input
          label="Nombre y Apellidos"
          placeholder="Juan Rivera Grisales"
          name="fullNames"
          onChange={handleNameChange}
          >

        </Input>

        <Input
          label="Numero de documento"
          placeholder="123456789"
          type="number"
          name="documentNumber"
          onBlur={handleEmailBlur}>
          
        </Input>

        {/*DATOS DE CONTACTO*/}
        <Input
          label="Direccion"
          placeholder="Calle 123 #45-67"
          name="address">
        </Input>

        <Input
          label="Numero de telefono"
          placeholder="123456789"
          type="tel"
          name="phoneNumber">
        </Input>

        <Input
          label="Correo electronico"
          placeholder="juan@ejemplo.com"
          type="email"
          name="email">
          
        </Input>

        <Input
          label="Confirmar correo electronico"
          placeholder="juan@ejemplo.com"
          type="email"
          name="confirmEmail">
        </Input>

        {/*DATOS DE ROL*/}
        <Input
          label="fecha de inicio"
          placeholder="2023-01-01"
          type="date"
          name="startDate">
        </Input>

        <Input
          label="fecha de fin"
          placeholder="2023-12-31"
          type="date"
          name="endDate">
        </Input>

        {/*Actions*/}
        <div className="flex items-center justify-center gap-12">
          <Buttom
            variant="secondary"
            size="sm"
            onClick={() => console.log("Oprimió cancelar")}>
            Cancelar
          </Buttom>
    
        <Buttom
          variant="primary"
          size="md"
          type="submit"
          onSubmit={handleButtonSubmit}
          onClick={() => console.log("Oprimió guardar")}>
          Guardar
        </Buttom>
          

      </div>



      </form>
    </div>
  );
}
