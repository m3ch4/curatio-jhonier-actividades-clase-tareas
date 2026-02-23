import Input from "@/shared/components/Input";
import Buttom from "../../../shared/components/Button";
import Select from "../../../shared/components/Select";
import { useEffect, useState } from "react";
import { getDocumentTypes, getRoles } from "../services/selectService";

export default function UserForm() {

{/*==========ESTADOS LISTA TIPOS DOCUMENTO==========*/}

  const [documentTypes, setDocumentTypes] = useState([])

  useEffect(()=> {
    getDocumentTypes().then(setDocumentTypes)
  },[])


{/*==========ESTADOS LISTA ROLES==========*/}
  const [roles, setRoles] = useState([])

  useEffect(()=> {
  getRoles().then(setRoles)
  },[])



  /*==========EVENTOS/*==========*/

  const handleNameChange = (e) => {
    console.log("Nombre del usuario", e.target.value);  {/*Almacenar el ingreso de datos en un input*/}
    
  };

  const handleEmailBlur = (b) => {                      {/*Hace referencia a cuando yo salgo del input*/}
  console.log("Email del usuario", b.target.value);
  };

  const handleButtonSubmit = (s) => {                      {/*Envia datos del formulario*/}
  console.log("Datos del formulario", s.target.value);
  };
  
  

  return (
    <div>
      {/*Formulario para crear el usuario REALIZADO POR JHONIER G */}

      <form className="grid grid-cols-1 space-x-6">
        {/*DATOS BASICOS */}

        <h1
        className="
        text-center
        text-subtittles
        font-bold
        text-label"
        >DATOS BASICOS
        </h1>
        
        <Input
          label="Nombre y Apellidos"
          placeholder="Juan Rivera Grisales"
          name="fullNames"
          onChange={handleNameChange}
          >
        </Input>

        <Select
        label="Tipos de documento"
        name="documentTypes"
        options={documentTypes}
        placeholder="Tipo de documento"
        >
        </Select>

        <Input
          label="Numero de documento"
          placeholder="123456789"
          type="number"
          name="documentNumber"
          onBlur={handleEmailBlur}>
          
        </Input>

        {/*DATOS DE CONTACTO*/}

        <h1
        className="
        text-center
        text-subtittles
        font-bold
        text-label"
        >Datos de Contacto</h1>

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

        <h1
        className="
        text-center
        text-subtittles
        font-bold
        text-label">Rol</h1>

        <Select
        name="roles"
        options={roles}
        placeholder="Seleccione un rol"
        >
        </Select>

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
