import SU from "../../utils/StringUtils";
import { Form } from "react-bootstrap";

type FormLabelProps = {
  key: string;
  name: string;
};

export default function FormLabel({ name }: FormLabelProps) {
  return (
    <Form.Group>
      <Form.Label>{SU.capitalize(name)}</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder={`Enter ${SU.capitalize(name)}`}
      />
      <Form.Control.Feedback type="invalid">
        Please provide an {name} name
      </Form.Control.Feedback>
    </Form.Group>
  );
}
