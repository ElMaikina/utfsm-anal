import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
    <td>{props.record.nombre}</td>
    <td>{props.record.rut}</td>
    <td>{props.record.direccion}</td>
    <td>{props.record.edad}</td>
    <td>{props.record.prevision}</td>
    <td>{props.record.cesfamorigen}</td>
    <td>{props.record.acompanante}</td>
    <td>{props.record.motivodeconsulta}</td>
    <td>{props.record.horadeatencion}</td>
    <td>{props.record.nfolio}</td>
    <td>{props.record.fecha}</td>
    <td>{props.record.clasificacion}</td>
    <td>{props.record.pulso}</td>
    <td>{props.record.Presion}</td>
    <td>{props.record.diagnostico}</td>
    <td>{props.record.indicaciones}</td>
    <td>{props.record.sapu}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Nombre</th>
           <th>RUT</th>
           <th>Direccion</th>
           <th>Edad</th>
           <th>Prevision</th>
           <th>CESFAM de Origen</th>
           <th>Acompanante</th>
           <th>Motivo de Consulta</th>
           <th>Hora de Atencion</th>
           <th>No. de Folio</th>
           <th>Fecha</th>
           <th>Clasificacion</th>
           <th>Pulso</th>
           <th>Presion</th>
           <th>Diagnostico</th>
           <th>Indicaciones</th>
           <th>SAPU</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}