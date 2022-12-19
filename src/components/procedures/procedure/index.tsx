import { IProcedureProps } from "../../../interfaces/procedures";
import { applyCurrencyFormat } from "../../../utils/currencyFormat";

const procedure = (props: IProcedureProps) => {
  return (
    <div className="procedimiento">
      <div className="nombre">
        <h3>Procedimiento {props.id}</h3>
        <p>{props.procedure.procedure}</p>
      </div>

      <div className="codigo">
        <h3>Codigo</h3>
        <p>{props.procedure.code}</p>
      </div>

      <div className="reclamado">
        <h3>Reclamado</h3>
        <p>{applyCurrencyFormat(props.procedure.claim)}</p>
      </div>

      <div className="diferencia">
        <h3>Diferencia RD$</h3>
        <p>{applyCurrencyFormat(props.procedure.difference)}</p>
      </div>

      <div className="autorizado">
        <h3>Autorizado RD$</h3>
        <p>{applyCurrencyFormat(props.procedure.authorize)}</p>
      </div>
    </div>
  );
};

export default procedure;
