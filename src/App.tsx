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
  const [disable, setDisable] = useState(false);

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
      hasChanged: true,
    };
    setProcedures([...procedures, newProcedure]);

  };

  const deleteProcedureHandler = async (id: string) => {
    try {
      setDisable(true);
      await deleteProcedure(id);
      const newProcedures = procedures.filter(
        (procedure) => procedure.id !== id
      );
      setProcedures(newProcedures);
      toast.success("Procedimiento eliminado correctamente");
    } catch (error) {
      toast.error("Error al eliminar el procedimiento");
    } finally {
      setDisable(false);
    }

  };

  const showModalHandler = () => {
    const hasAnyChanged = procedures.some(
      (procedure) => procedure.hasChanged
    );
    if (hasAnyChanged) {
      toast.warn("Hay cambios sin guardar");
      return;
    }
    setShowModal(!showModal);
  };

  const saveProcedureHandler = () => {
    try {
      setDisable(true);
      const hasAnyChanged = procedures.some(
        (procedure) => procedure.hasChanged
      );
      if (!hasAnyChanged) {
        toast.warn("No hay cambios para guardar");
        return;
      };
      procedures.forEach(async (procedure) => {
        if (!procedure.hasChanged) return;
        delete procedure.hasChanged;
        await createProcedure(procedure);
      });
      toast.success("Procedimientos guardados o actualizados correctamente");
    } catch (error) {
      toast.error("Error al guardar los procedimientos");
    } finally {
      setDisable(false);
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
    currentProcedures[index].hasChanged = true;

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
          showModalHandler();
        }}
        saveProcedure={saveProcedureHandler}
        deleteProcedure={deleteProcedureHandler}
        updateProcedure={onChageValueHandler}
        showModal={showModal}
        disable={disable}
      />
    </div>
  );
}

export default App;
