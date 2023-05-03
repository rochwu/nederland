export enum Type {
  Number = 'Number',
  Op = 'Op',
  Backspace = 'Backspace',
  End = 'End',
}

export enum OpType {
  Divide = 'Divide',
  Multiply = 'Multiply',
  Subtract = 'Subtract',
  Add = 'Add',
  Decimal = 'Decimal',
}

export declare namespace Token {
  type Decimal = {
    type: Type.Op;
    op: OpType.Decimal;
  };

  type Op =
    | {
        type: Type.Op;
        op: OpType;
      }
    | Decimal;

  type Number = {
    type: Type.Number;
    value: number;
  };

  type End = {
    type: Type.End;
  };

  type Any = Op | Number | End;
}

export const isNumber = (token?: Token.Any): token is Token.Number => {
  return !!token && token.type === Type.Number;
};

export const isOp = (token?: Token.Any): token is Token.Op => {
  return !!token && token.type === Type.Op;
};

export const isDecimal = (token?: Token.Any): token is Token.Decimal => {
  return isOp(token) && token.op === OpType.Decimal;
};

export const isEnd = (token?: Token.Any): token is Token.End => {
  return !!token && token.type === Type.End;
};