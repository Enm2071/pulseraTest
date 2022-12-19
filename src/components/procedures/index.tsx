import { IProceduresProps } from "../../interfaces/procedures";
import Procedure from "./procedure";

const procedures = (props: IProceduresProps) => {
  const renderProcedures = () => {
    return props.procedures.map((procedure, index) => {
      return <Procedure key={procedure.id} id={index + 1} procedure={procedure} />;
    });
  };
  return (
    <div className="procedimientos">
      {renderProcedures()}
      <button className="editar" onClick={() => props.showModal()}>
        <i className="bx bx-edit-alt"></i>
        Editar procedimientos
      </button>
    </div>
  );
};

export default procedures;
