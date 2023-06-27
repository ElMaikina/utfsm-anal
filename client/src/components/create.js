import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
    nombre: "",
    rut: "",
    direccion: "",
    edad: "",
    prevision: "",
    cesfamorigen: "",
    acompanante: "",
    motivodeconsulta: "",
    horadeatencion: "",
    nfolio: "",
    fecha: "",
    clasificacion: "",
    pulso: "",
    Presion: "",
    diagnostico: "",
    indicaciones: "",
    sapu: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm(
    { 
      nombre: "",
      rut: "",
      direccion: "",
      edad: "",
      prevision: "",
      cesfamorigen: "",
      acompanante: "",
      motivodeconsulta: "",
      horadeatencion: "",
      nfolio: "",
      fecha: "",
      clasificacion: "",
      pulso: "",
      Presion: "",
      diagnostico: "",
      indicaciones: "",
      sapu: "",
    });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3> Ingresode paciente</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="nombre">Nombre</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="rut">RUT</label>
         <input
           type="text"
           className="form-control"
           id="rut"
           value={form.rut}
           onChange={(e) => updateForm({ rut: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="direccion">Dirección</label>
         <input
           type="text"
           className="form-control"
           id="direccion"
           value={form.direccion}
           onChange={(e) => updateForm({ direccion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="edad">Edad</label>
         <input
           type="number"
           className="form-control"
           id="edad"
           value={form.edad}
           onChange={(e) => updateForm({ edad: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="prevision">Previsión</label>
         <input
           type="text"
           className="form-control"
           id="prevision"
           value={form.prevision}
           onChange={(e) => updateForm({ prevision: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="cesfamorigen">CESFAM origen</label>
         <input
           type="text"
           className="form-control"
           id="cesfamorigen"
           value={form.cesfamorigen}
           onChange={(e) => updateForm({ cesfamorigen: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="acompanante">Acompañante</label>
         <input
           type="text"
           className="form-control"
           id="acompanante"
           value={form.acompanante}
           onChange={(e) => updateForm({ acompanante: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="motivodeconsulta">Motivo de consulta</label>
         <input
           type="text"
           className="form-control"
           id="motivodeconsulta"
           value={form.motivodeconsulta}
           onChange={(e) => updateForm({ motivodeconsulta: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="horadeatencion">Hora de atención</label>
         <input
           type="time"
           className="form-control"
           id="horadeatencion"
           value={form.horadeatencion}
           onChange={(e) => updateForm({ horadeatencion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="nfolio">N° de folio</label>
         <input
           type="number"
           className="form-control"
           id="nfolio"
           value={form.nfolio}
           onChange={(e) => updateForm({ nfolio: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="fecha">Fecha</label>
         <input
           type="date"
           className="form-control"
           id="fecha"
           value={form.fecha}
           onChange={(e) => updateForm({ fecha: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="clasificacion">Clasificación</label>
         <input
           type="text"
           className="form-control"
           id="clasificacion"
           value={form.clasificacion}
           onChange={(e) => updateForm({ clasificacion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="pulso">Pulso</label>
         <input
           type="number"
           className="form-control"
           id="pulso"
           value={form.pulso}
           onChange={(e) => updateForm({ pulso: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="Presion">Presión</label>
         <input
           type="number"
           className="form-control"
           id="Presion"
           value={form.Presion}
           onChange={(e) => updateForm({ Presion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="disgnostico">Diagnóstico</label>
         <input
           type="text"
           className="form-control"
           id="disgnostico"
           value={form.disgnostico}
           onChange={(e) => updateForm({ disgnostico: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="indicaciones">Indicaciones</label>
         <input
           type="text"
           className="form-control"
           id="indicaciones"
           value={form.indicaciones}
           onChange={(e) => updateForm({ indicaciones: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="sapu">SAPU</label>
         <input
           type="text"
           className="form-control"
           id="sapu"
           value={form.sapu}
           onChange={(e) => updateForm({ sapu: e.target.value })}
         />
       </div>


       {/* <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Enfermero/a</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Auxiliar</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Médico</label>
         </div>
       </div> */}
       <div className="form-group">
         <input
           type="submit"
           value="Ingresar"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}