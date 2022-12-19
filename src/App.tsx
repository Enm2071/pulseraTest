import { useState, useEffect } from "react";
import {
  getProcedures,
  createProcedure,
  deleteProcedure,
} from "./services/proceduresServices";
import Procedures from "./components/procedures";
import Modal from "./components/modals";
import { IProcedure, ProcedureType } from "./interfaces/procedures";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  const [procedures, setProcedures] = useState<IProcedure[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getProceduresData = async () => {
      try {
        const procedures = await getProcedures();
        setProcedures(procedures);
      } catch (error) {
        toast.error("Error al obtener los procedimientos");
      }
    };
    getProceduresData();
  }, []);

  const addProcedureHandler = () => {
    const newProcedure: IProcedure = {
      id: uuidv4(),
      authorize: "Ej. 456123",
      claim: "Ej. 456123",
      code: "Ej. 456123",
      difference: "Ej. 456123",
      procedure: "Ej. 456123",
    };
    setProcedures([...procedures, newProcedure]);
  };

  const deleteProcedureHandler = async (id: string) => {
    try {
      await deleteProcedure(id);
      const newProcedures = procedures.filter(
        (procedure) => procedure.id !== id
      );
      setProcedures(newProcedures);
      toast.success("Procedimiento eliminado correctamente");
    } catch (error) {
      toast.error("Error al eliminar el procedimiento");
    }
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const saveProcedureHandler = () => {
    try {
      procedures.forEach(async (procedure) => {
        await createProcedure(procedure);
      });
      toast.success("Procedimientos guardados o actualizados correctamente");
    } catch (error) {
      toast.error("Error al guardar los procedimientos");
    } finally {
      setShowModal(false);
    }
  };

  const onChageValueHandler = (
    procedureId: string,
    field: ProcedureType,
    value: string
  ) => {
    const currentProcedures = [...procedures];
    const index = currentProcedures.findIndex(
      (procedure) => procedure.id === procedureId
    );

    currentProcedures[index][field] = value;

    setProcedures(currentProcedures);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div>
        <h1>Procedimientos</h1>
      </div>
      <Procedures procedures={procedures} showModal={showModalHandler} />
      <Modal
        addProcedure={addProcedureHandler}
        procedures={procedures}
        closeModal={() => {
          setShowModal(false);
        }}
        saveProcedure={saveProcedureHandler}
        deleteProcedure={deleteProcedureHandler}
        updateProcedure={onChageValueHandler}
        showModal={showModal}
      />
    </div>
  );
}

export default App;
