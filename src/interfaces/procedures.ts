type ProcedureType = 'authorize' | 'code' | 'procedure' | 'difference' | 'claim';

interface IProcedure {
  id: string;
  authorize: string;
  code: string;
  procedure: string;
  difference: string;
  claim: string;
  hasChanged?: boolean;
}

interface IProcedureProps {
  id: number;
  procedure: IProcedure;
}

interface IEditProcedureProps {
  id: number;
  procedure: IProcedure;
  deleteProcedure: (id: string) => void;
  updateProcedure: (id: string, field: ProcedureType, value: string) => void;
}

interface IProceduresProps {
  procedures: IProcedure[];
  showModal: () => void;
}

interface IProcedureModalProps {
  procedures: IProcedure[];
  showModal: boolean;
  disable: boolean;
  addProcedure: () => void;
  saveProcedure: () => void;
  deleteProcedure: (id: string) => void;
  updateProcedure: (id: string, field: ProcedureType, value: string) => void;
  closeModal: () => void;
}

export type {
  IProcedure,
  IProcedureProps,
  IProceduresProps,
  IProcedureModalProps,
  IEditProcedureProps,
  ProcedureType,
};
