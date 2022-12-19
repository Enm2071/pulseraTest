import { BiTrash } from "react-icons/bi";
import { IEditProcedureProps } from "../../../interfaces/procedures";

const EditProcedure = (props: IEditProcedureProps) => {
  return (
    <div className="modal__procedimiento">
      <BiTrash
        className="icon"
        onClick={() => props.deleteProcedure(props?.procedure?.id)}
      />
      <div className="nombre">
        <h3>Procedimiento {props.id}</h3>
        <input type="text" placeholder={props.procedure.procedure} onChange={
            (e) => props.updateProcedure(props?.procedure?.id, 'procedure', e.target.value)
        }></input>
      </div>

      <div className="codigo">
        <h3>Codigo</h3>
        <input type="text" placeholder={props.procedure.code} onChange={
            (e) => props.updateProcedure(props?.procedure?.id, 'code', e.target.value)
        }></input>
      </div>

      <div className="reclamado">
        <h3>Reclamado</h3>
        <input type="text" placeholder={props.procedure.claim} onChange={
            (e) => props.updateProcedure(props?.procedure?.id, 'claim', e.target.value)
        }></input>
      </div>

      <div className="diferencia">
        <h3>Diferencia RD$</h3>
        <input type="text" placeholder={props.procedure.difference} onChange={
            (e) => props.updateProcedure(props?.procedure?.id, 'difference', e.target.value)
        }></input>
      </div>

      <div className="autorizado">
        <h3>Autorizado RD$</h3>
        <input type="text" placeholder={props.procedure.authorize} onChange={
            (e) => props.updateProcedure(props?.procedure?.id, 'authorize', e.target.value)
        }></input>
      </div>
    </div>
  );
};

export default EditProcedure;