export interface ReduxActions {
  type: string;
  payload?: any;
}

export interface Country {
  name: string;
  population: number;
  numberOfStates: number;
}
