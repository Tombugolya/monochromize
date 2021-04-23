import SU from '../../utils/StringUtils';
import { Form } from 'react-bootstrap';
import { FC } from 'react';

type TFormLabel = FC<{
  key: number;
  name: string;
}>;

export const FormLabel: TFormLabel = ({ name }) => {
  return (
    <Form.Group>
      <Form.Label>{SU.capitalize(name)}</Form.Label>
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
