import { Link, withRouter } from "react-router-dom";
import Swal from 'sweetalert2'
import clienteAxios from '../config/axios'

const Cita = (props) => {

    if(!props.cita) {
        props.history.push('/')
        return null
    }

    const { cita:{ fecha, nombre, propietario, sintomas, telefono, hora, _id } } = props

    const eliminarCita = id => {
        clienteAxios.delete(`/pacientes/${id}`)
        Swal.fire({
            title: '¿Estás seguro de eliminar a este paciente?',
            text: "Esta acción es irrevertible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar ahora!',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                  // Alerta de eliminado
                'Eliminado!',
                'El paciente ha sido eliminado con éxito.',
                'success'
              )
              // Eliminado de la base de datos
              clienteAxios.delete(`/pacientes/${id}`)
              .then(respuesta => {
                  props.guardarConsultar(true);
                  props.history.push("/");
              })
              .catch(error => console.log(error))
            }
          })
    }

  return (
    <>
      <h1 className="pt-5">Nombre cita: {nombre}</h1>
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 d-flex justify-content-center">
            <Link
              to={"/"}
              className="btn btn-success pt-2 px-5 text-uppercase font-weight-bold"
            >
              Volver
            </Link>
          </div>

          <div className="col-md-8 mx-auto">
            <div className="list-group">
              <div className="p-5 list-group-item list-group list-group-action flex-column align-items center">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h3 className="mb-3">{nombre}</h3>
                  <small className="fecha-alta">
                    {fecha} - {hora}
                  </small>
                </div>
                <p className="mb-0">{sintomas}</p>
                <div className="contacto py-3">
                  <p>Dueño: {propietario}</p>
                  <p>Teléfono: {telefono}</p>
                </div>
                <div className="d-flex">
                    <button
                        type="button"
                        className="btn btn-danger text-uppercase font-weight-bold p-2 px-5 col"
                        onClick={() => eliminarCita(_id)}
                    >Eliminar &times;</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Cita);
