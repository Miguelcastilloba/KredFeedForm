import { useState } from 'react';
import $ from 'jquery';

export default function Form() {



const [razonsoc, setRazonS] = useState('');
const [nombrecomercial, setNombreComercial] = useState('');
const [nacionalidad, setNacionalidad] = useState('');
const [fechaconst, setFechaConst] = useState('');
const [rfc, setRfc] = useState('');
const [regimenfiscal, setRegimenFiscal] = useState('');
const [industria, setIndustria] = useState('');

const [calle, setCalle] = useState('');
const [numeroExt, setNumeroExt] = useState('');
const [numeroInt, setNumeroInt] = useState('');
const [codigoP, setCodigoP] = useState('');
const [colonia, setColonia] = useState('');
const [ciudad, setCiudad] = useState('');
const [estado, setEstado] = useState('');
const [pais, setPais] = useState('');

const [comprobantedom, setComprobanteDom] = useState('');
const [correo, setCorreo] = useState('');

const [nombre, setNombre] = useState('');
const [genero, setGenero] = useState('');
const [fechanac, setFechanac] = useState('');
const [estadonac, setEstadoNac] = useState('');
const [paisnac, setPaisnac] = useState('');
const [nacionalidadrep, setNacionalidadRep] = useState('');
const [curp, setCurp] = useState('');
const [rfcrepresentante, setRfcRepresentante] = useState('');
const [domiciliorepresentante, setDomicilioRepresentante] = useState('');
const [estadocivil, setEstadoCivil] = useState('');
const [correorepresentante, setCorreoRepresentante] = useState('');
const [telefono, setTelefonoRepresentante] = useState('');
const [identificacionrep, setIdentificacionRepresentante] = useState('');

const [cuenta, setCuenta] = useState('');



const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [errorrfc, setErrorRfc ] = useState(false);
const [errorcurp, setErrorCurp] = useState(false);
const [errorclabe, setErrorClabe ] = useState(false);


const handleRazonS = (e) => {
	setRazonS(e.target.value);
	setSubmitted(false);
};

const handleNombreComercial = (e) => {
	setNombreComercial(e.target.value);
	setSubmitted(false);
};

const handleNacionalidad = (e) => {
	setNacionalidad(e.target.value);
	setSubmitted(false);
};

const handleFechaConst = (e) => {
	setFechaConst(e.target.value);
	setSubmitted(false);
};

const handleRfc = (e) => {
	setRfc(e.target.value);
	setSubmitted(false);
};

const handleRegimenFiscal = (e) => {
	setRegimenFiscal(e.target.value);
	setSubmitted(false);
};

const handleIndustria = (e) => {
	setIndustria(e.target.value);
	setSubmitted(false);
};

const handleCalle = (e) => {
	setCalle(e.target.value);
	setSubmitted(false);
};

const handleNumeroExt = (e) => {
	setNumeroExt(e.target.value);
	setSubmitted(false);
};

const handleNumeroInt = (e) => {
	setNumeroInt(e.target.value);
	setSubmitted(false);
};

const handleCodigoP = (e) => {
	setCodigoP(e.target.value);
	setSubmitted(false);
};

const handleColonia = (e) => {
	setColonia(e.target.value);
	setSubmitted(false);
};

const handleCiudad = (e) => {
	setCiudad(e.target.value);
	setSubmitted(false);
};

const handleEstado = (e) => {
	setEstado(e.target.value);
	setSubmitted(false);
};

const handlePais = (e) => {
	setPais(e.target.value);
	setSubmitted(false);
};

const handleComprobanteDom = (e) => {
	setComprobanteDom(e.target.value);
	setSubmitted(false);
};

const handleCorreo = (e) => {
	setCorreo(e.target.value);
	setSubmitted(false);
};

const handleNombre = (e) => {
	setNombre(e.target.value);
	setSubmitted(false);
};

const handleGenero = (e) => {
	setGenero(e.target.value);
	setSubmitted(false);
};

const handleFechaNac = (e) => {
	setFechanac(e.target.value);
	setSubmitted(false);
};

const handleEstadoNac = (e) => {
	setEstadoNac(e.target.value);
	setSubmitted(false);
};

const handlePaisNac = (e) => {
	setPaisnac(e.target.value);
	setSubmitted(false);
};

const handleNacionalidadRep = (e) => {
	setNacionalidadRep(e.target.value);
	setSubmitted(false);
};

const handleCurp = (e) => {
	setCurp(e.target.value);
	setSubmitted(false);
};

const handleRfcRepresentante = (e) => {
	setRfcRepresentante(e.target.value);
	setSubmitted(false);
};

const handleDomicilioRepresentante = (e) => {
	setDomicilioRepresentante(e.target.value);
	setSubmitted(false);
};

const handleEstadoCivil = (e) => {
	setEstadoCivil(e.target.value);
	setSubmitted(false);
};

const handleCorreoRepresentante = (e) => {
	setCorreoRepresentante(e.target.value);
	setSubmitted(false);
};

const handleTelefonoRepresentante = (e) => {
	setTelefonoRepresentante(e.target.value);
	setSubmitted(false);
};

const handleIdentificacionRepresentante = (e) => {
	setIdentificacionRepresentante(e.target.value);
	setSubmitted(false);
};

const handleCuenta = (e) => {
	setCuenta(e.target.value);
	setSubmitted(false);
};



const handleSubmit = (e) => {
	e.preventDefault();
	if (razonsoc === '' || nombrecomercial === '' || nacionalidad === '' || fechaconst ==='' || rfc === ''  || regimenfiscal === '' || industria ==='' || calle === '' || numeroExt === ''  || codigoP === '' || colonia === '' || ciudad === '' || estado === '' || pais === '' || comprobantedom === '' || correo ===''  || nombre === '' || genero === '' || fechanac === '' || estadonac === '' || paisnac === '' || nacionalidadrep === '' || curp === '' || rfcrepresentante === '' || domiciliorepresentante === '' || estadocivil === '' || telefono === '' || identificacionrep ==='' || cuenta ===''  ) {
	setError(true);
	} else if ( rfc.length != 12 || rfcrepresentante.length != 13){
    setErrorRfc(true);
    } else if ( curp.length != 18 ){
    setErrorCurp(true);
    }else if (cuenta.length != 16){
    setErrorClabe(true);    
    }else{        
	setSubmitted(true);
	$(".form-registro").css("display", "none");
	$(".main-title>h1").html("¡Tu negocio ha sido registrado!");
	$(".main-title>p").html("A continuación te mostramos los detalles");
	setError(false);
	}
};


const successMessage = () => {
	
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>

<div className="form-card">

    <h4>Información de la empresa:</h4>
    
    <div className="flex-row"><p>Razon Social: <b>{razonsoc}</b></p><p>Nombre Comercial: <b>{nombrecomercial}</b></p>   </div>
    <div className="flex-row"><p>Nacionalidad: <b>{nacionalidad}</b></p><p>Fecha de Constitución: <b>{fechaconst}</b></p>   </div>
    <div className="flex-row"><p>RFC: <b>{rfc}</b></p><p>Regimen Fiscal: <b>{regimenfiscal}</b></p>   </div>
    <div className="flex-row"><p>Industria: <b>{industria}</b></p>  </div>
    
    <h4>Dirección de la empresa:</h4>
    
    <div className="flex-row"><p>Calle: <b>{calle}</b></p><p>Numero Exterior: <b>{numeroExt}</b></p>   </div>
    <div className="flex-row"><p>Numero Interior: <b>{numeroInt}</b></p><p>Codigo Postal: <b>{codigoP}</b></p>   </div>
    <div className="flex-row"><p>Colonia: <b>{colonia}</b></p><p>Ciudad: <b>{ciudad}</b></p>   </div>
    <div className="flex-row"><p>Estado: <b>{estado}</b></p><p>Pais: <b>{pais}</b></p>   </div>
    <div className="flex-row"><p>Comprobante de Domicilio: <b>{comprobantedom}</b></p>  </div>
    
    <h4>Representante legal:</h4>
    
    <div className="flex-row"><p>Correo: <b>{correo}</b></p><p>Nombre: <b>{nombre}</b></p>   </div>
    <div className="flex-row"><p>Genero: <b>{genero}</b></p><p>Fecha de Nacimiento: <b>{fechanac}</b></p>   </div>
    <div className="flex-row"><p>Estado de nacimiento: <b>{estadonac}</b></p><p>Pais de Nacimiento: <b>{paisnac}</b></p>   </div>
    <div className="flex-row"><p>Nacionalidad: <b>{nacionalidadrep}</b></p><p>CURP: <b>{curp}</b></p>   </div>
    <div className="flex-row"><p>RFC: <b>{rfcrepresentante}</b></p><p>Domicilio: <b>{domiciliorepresentante}</b></p>   </div>
    <div className="flex-row"><p>Estado Civil: <b>{nacionalidadrep}</b></p><p>Teléfono: <b>{telefono}</b></p>  </div>
    <div className="flex-row"><p>Identificación: <b>{identificacionrep}</b></p>   </div>
    
    <h4>Información bancaria:</h4>
    
    <div className="flex-row"><p>CLABE Interbancaria: <b>{cuenta}</b></p>  </div>
    
    
    </div>

	<a className="btn" href="https://app.kredfeed.com/login" target="_blank">Mi cuenta</a>
	</div>
	);
};


const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Por favor introduzca todos los datos requeridos</h1>
	</div>
	);
};

const errorMessageRfc = () => {
	return (
	<div
		className="errorrfc"
		style={{
		display: errorrfc ? '' : 'none',
		}}>
		<h1>La longitud del RFC es inadecuada</h1>
	</div>
	);
};

const errorMessageCurp = () => {
	return (
	<div
		className="errorcurp"
		style={{
		display: errorcurp ? '' : 'none',
		}}>
		<h1>La longitud de la CURP es inadecuada</h1>
	</div>
	);
};

const errorMessageClabe = () => {
	return (
	<div
		className="errorrclabe"
		style={{
		display: errorclabe ? '' : 'none',
		}}>
		<h1>La longitud de la CLABE es inadecuada</h1>
	</div>
	);
};


return (


	
	<div className="form">
	<div className="main-title">
		<h1>¡Iniciemos con el registro de tu negocio!</h1>
		<p> Antes que nada requerimos algunos datos y documentos para validar tu información</p>
	</div>

	<div className="form-exitoso">
		{successMessage()}
	</div>
   

	


	<form className="form-registro">
		
		
     <div className="form-card">
        
		<div className="flex-row subtle-row">
		<span>1</span>
		<div className="flex-column">
		<h2>Empresa </h2>
		<p>
		¿Con quíen tenemos el placer?
		</p>
		</div>

		</div>

        <div className="flex-row">
        
		<input onChange={handleRazonS} className="input"
		value={razonsoc} type="text" placeholder="Razón social"/> 

      
		<input onChange={handleNombreComercial} className="input"
		value={nombrecomercial} type="text"  placeholder="Nombre comercial"/> 


        </div><div className="flex-row">
      
		<input onChange={handleNacionalidad} className="input"
		value={nacionalidad} type="text"   placeholder="Nacionalidad de la empresa"/> 

        
		<input onChange={handleFechaConst} className="input"
		value={fechaconst} type="date"  placeholder="Fecha de constitución"/> 


        </div><div className="flex-row">
    
		<input onChange={handleRfc} className="input"
		value={rfc} type="text"  placeholder="RFC (12 Caracteres)"/> 

        
		<input onChange={handleRegimenFiscal} className="input"
		value={regimenfiscal} type="text"  placeholder="Regimén fiscal" /> 
        </div>
		
		<div className="flex-row">
       
		<input onChange={handleIndustria} className="input"
		value={industria} type="text"  placeholder="Giro al que pertenece"/> 
        </div>
       
       
        </div> <div className="form-card">

        <div className="flex-row subtle-row">
		<span>2</span>
		<div className="flex-column">
		<h2>Domicilio </h2>
		<p>
		¿Donde podemos localizar tu negocio?
		</p>
		</div>

		</div>

        <div className="flex-row">
       
		<input onChange={handleCalle} className="input"
		value={calle} type="text"  placeholder="Calle"/> 

  
		<input onChange={handleNumeroExt} className="input"
		value={numeroExt} type="text" placeholder="Numero exterior"/> 
        </div><div className="flex-row"   >


     
		<input onChange={handleNumeroInt} className="input"
		value={numeroInt} type="text"  placeholder="Numero interior (Opcional)"/> 

     
		<input onChange={handleCodigoP} className="input"
		value={codigoP} type="text"  placeholder="Codigo postal"/> 

        </div><div className="flex-row">
    
		<input onChange={handleColonia} className="input"
		value={colonia} type="text"  placeholder="Colonia"/> 

        
		<input onChange={handleCiudad} className="input"
		value={ciudad} type="text"  placeholder="Ciudad"/> 


        </div><div className="flex-row">
       
		<input onChange={handleEstado} className="input"
		value={estado} type="text"  placeholder="Estado"/> 

   
		<input onChange={handlePais} className="input"
		value={pais} type="text" placeholder="Pais"/> 
        </div>
		
		<div className="flex-row">
     
		<label class="custom-file-upload">
			Comprobante de domicilio
		<input onChange={handleComprobanteDom} className="input"
		value={comprobantedom}  type="file" name="upload" accept="application/pdf" placeholder="Comprobante de domicilio"/> </label>
        </div>


        </div><div className="form-card">

        <div className="flex-row subtle-row">
		<span>3</span>
		<div className="flex-column">
		<h2>Representante legal </h2>
		<p>
		¿Con quién nos pondremos en contacto sobre tu negocio?
		</p>
		</div>

		</div>

        <div className="flex-row">    
        
		<input onChange={handleCorreo} className="input"
		value={correo} type="email" placeholder="Email"/> 

     
		<input onChange={handleNombre} className="input"
		value={nombre} type="text"  placeholder="Nombre completo"/> 
        </div><div className="flex-row">


      
		<input onChange={handleGenero} className="input"
		value={genero} type="text" placeholder="Genero"/> 

       
		<input onChange={handleFechaNac} className="input"
		value={fechanac} type="date" placeholder="Fecha de nacimiento"/> 
        </div><div className="flex-row">

      
		<input onChange={handleEstadoNac} className="input"
		value={estadonac} type="text" placeholder="Estado de nacimiento"/> 

        
		<input onChange={handlePaisNac} className="input"
		value={paisnac} type="text" placeholder="Pais de nacimiento"/> 

        </div><div className="flex-row">
  
		<input onChange={handleNacionalidadRep} className="input"
		value={nacionalidadrep} type="text" placeholder="Nacionalidad"/> 

     
		<input onChange={handleCurp} className="input"
		value={curp} type="text"  placeholder="CURP (18 Caracteres)"/> 
         </div><div className="flex-row " >


 
		<input onChange={handleRfcRepresentante} className="input"
		value={rfcrepresentante} type="text" placeholder="RFC (13 Caracteres)"/> 

      
		<input onChange={handleDomicilioRepresentante} className="input"
		value={domiciliorepresentante} type="text" placeholder="Domicilio"/> 
        </div>
		
		<div className="flex-row">
       
		<input onChange={handleEstadoCivil} className="input"
		value={estadocivil} type="text" placeholder="Estado civil"/> 

		<input onChange={handleTelefonoRepresentante} className="input"
		value={telefono} type="text" placeholder="Teléfono" /> 
         </div><div className="flex-row">
      


		

        

		<label class="custom-file-upload">
			Comprobante de domicilio
		<input onChange={handleIdentificacionRepresentante} className="input"
		value={identificacionrep}  type="file" name="upload" accept="application/pdf"  placeholder="Identificación oficial"/> </label>


        </div>
        </div>
        
        <div className="form-card">

        <div className="flex-row subtle-row">
		<span>4</span>
		<div className="flex-column">
		<h2>Informacion bancaria </h2>
		<p>
		¿A dondé enviaremos tus ingresos?
		</p>
		</div>

		</div>

        <div className="flex-row">
   
		<input onChange={handleCuenta} className="input"
		value={cuenta} type="text" placeholder="CLABE interbancaria (16 Caracteres)"/> 
        </div>
        </div>
<div className="last-row">

		<div className="messages">
		{errorMessage()}
        {errorMessageRfc()}
        {errorMessageCurp()}
        {errorMessageClabe()}
	
	</div>
		<button onClick={handleSubmit} className="btn" type="submit">
		Enviar
		</button>
		</div>
	
	</form>
	</div>
);
}
