import {
  doc,
  getFirestore,
  collection,
  getDocs,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { IProcedure } from "../interfaces/procedures";
import firebaseIntance from "./firebaseInitializer";

const db = getFirestore(firebaseIntance);

async function getProcedures(): Promise<IProcedure[]> {
  const proceduresCol = collection(db, "procedures");
  const proceduresSnapshot = await getDocs(proceduresCol);
  const proceduresList = proceduresSnapshot.docs.map(doc => {
    const data = doc.data() as IProcedure;
    return {
      ...data,      
      id: doc.id,
    };
  });
  return proceduresList;
}

async function getProcedure(id: string): Promise<IProcedure | null> {
  const docRef = doc(db, "procedures", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }
  return docSnap.data() as IProcedure;
}

async function createProcedure(procedure: IProcedure): Promise<IProcedure> {
  const procedureRef = doc(db, "procedures", procedure.id);
  await setDoc(procedureRef, procedure);
  return procedure;
}

async function deleteProcedure(id: string): Promise<void> {
  const docRef = doc(db, "procedures", id);
  await deleteDoc(docRef);
}

export { getProcedures, getProcedure, createProcedure, deleteProcedure };
