import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Components/Alert';

function Registro(props) {
  return (
    <>
      <div className='contenedorSocial'>
        <SocialButton icono="facebook" />
        <SocialButton icono="github" />
        <SocialButton icono="linkedin" />
      </div>
      <p>o usa tu mail para registrarte</p>
      <Formulario 
        validarDatos={props.validarDatos}
        // pass other props as needed
      />
      {props.errorllenado ? <Alert errormsg={props.errorllenadomsg} status="alert alert-danger" /> : null}
      {/* other alerts */}
    </>
  );
}

export default Registro;