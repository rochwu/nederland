import styled from '@emotion/styled';
import {FC} from 'react';

import {enoughCents, useInputState} from '../../input-state';
import {tokenizer} from '../../tokens';
import {Cell} from '../Cell';

const Component = styled(Cell)({
  backgroundColor: 'white',
  color: 'black',
  ':active:not(:disabled)': {
    backgroundColor: 'lightgray',
  },
  ':hover:not(:disabled)': {
    filter: 'brightness(75%)',
  },
});

console.log('wtf');

type ComponentProps = Omit<Parameters<typeof Component>[0], 'onClick'>;

export type NumericProps = {
  value: number;
} & Partial<ComponentProps>;

export const Numeric: FC<NumericProps> = ({
  value,
  disabled: disabledOverride,
  ...props
}) => {
  const pushNumeric = useInputState((state) => state.pushNumeric);
  const disabled = useInputState(enoughCents);

  const click = () => {
    const token = tokenizer.numeric(value);

    pushNumeric(token);
  };

  return (
    <Component
      onClick={click}
      disabled={disabledOverride ?? disabled}
      {...props}
    >
      {value.toString()}
    </Component>
  );
};
