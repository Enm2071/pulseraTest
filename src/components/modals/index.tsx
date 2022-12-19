import { IProcedureModalProps } from "../../interfaces/procedures";
import EditProcedure from "../procedures/procedure/edit";

const modal = (props: IProcedureModalProps) => {
  const renderProcedures = () => {
    return props.procedures.map((procedure, index) => {
      return (
        <EditProcedure
          key={procedure.id}
          id={index + 1}
          procedure={procedure}
          deleteProcedure={props?.deleteProcedure}
          updateProcedure={props?.updateProcedure}
        />
      );
    });
  };

  if (!props.showModal) {
    return null;
  }

  return (
    <div className="modal modal--open">
      <div className="modal__content">
        <div className="modal__data">
          <div className="modal__data__header">
            <h3>Procedimientos</h3>
            <a onClick={() => props.addProcedure()} className="add_procedure">
              + Añadir procedimiento
            </a>
          </div>
          <div className="modal__data__procedimientos">
            {renderProcedures()}
          </div>
          <div className="modal__data__buttons">
            <button
              className="modal__cancelar"
              onClick={() => props.closeModal()}
            >
              Cancelar
            </button>
            <button
              className="modal__guardar"
              onClick={() => props.saveProcedure()}
            >
              <i className="bx bx-check"></i>
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
      <span className="modal__cerrar" onClick={() => props.closeModal()}>
        x
      </span>
      <div className="modal__eliminar">
        <div className="modal__eliminar__content">
          <h3>¿Estas seguro de eliminar este procedimiento?</h3>
          <div className="modal__eliminar__buttons">
            <button className="modal__eliminar__cancelar">Cancelar</button>
            <button className="modal__eliminar__aceptar">aceptar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
