/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, useTheme } from '@emotion/react';
import SU from '../../utils/StringUtils';
import { Form } from 'react-bootstrap';
import { FC } from 'react';
import { ThemeProps } from '../../contexts/ThemeContext';

type TFormLabel = FC<{
  key: number;
  name: string;
}>;

export const FormLabel: TFormLabel = ({ name }) => {
  const theme = useTheme() as ThemeProps;
  return (
    <Form.Group css={{ width: '60%' }}>
      <Form.Label css={{ color: theme.colors.secondary }}>
        {SU.capitalize(name)}
      </Form.Label>
      <Form.Control
        required
        name={name}
        type="text"
        placeholder={`Enter ${SU.capitalize(name)}`}
      />
      <Form.Control.Feedback type="invalid">
        Please provide an {name} name
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormLabel;
