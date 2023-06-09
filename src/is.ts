import {OpType, Token, Type} from './types';

export const isNumeric = (token?: Token.Any): token is Token.Numeric => {
  return !!token && token.type === Type.Numeric;
};

export const isZero = (token?: Token.Any): token is Token.Zero => {
  return isNumeric(token) && token.value === 0;
};

export const isOp = (token?: Token.Any): token is Token.Op => {
  return !!token && token.type === Type.Op;
};

export const isDot = (token?: Token.Any): token is Token.Dot => {
  return isOp(token) && token.op === OpType.Dot;
};

export const isEnd = (token?: Token.Any): token is Token.End => {
  return !!token && token.type === Type.End;
};
