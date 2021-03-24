export interface IRootState {
  post: DataTypes;
  count: number;
}
export interface RootState {
  post: IRootState;
}

export interface DataType {
  data: string;
  title: string;
  contents: string;
}
export type DataTypes = DataType[];

//action type

export interface ActionType {
  CALL_API: string;
  COUNT_API: string;
  TEST_CONSOLE: string;
  SAGA_API: string;
  SUCESS_API: string;
}

export interface ActionsType {
  type: string;
  count: number;
  data: DataTypes;
}

export interface SagaType {
  type: string;
  data: DataTypes;
}
