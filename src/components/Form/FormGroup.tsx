import { FC, FormEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormLabel from './FormLabel';

type TFormGroup = FC<{ fields: string[] }>;

export const FormGroup: TFormGroup = ({ fields }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
    }
    setValidated(true);
  };

  return (
    <div id="form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {fields.map((val: string, index) => (
          <FormLabel name={val} key={index} />
        ))}
        <Button type="submit" variant="dark">
          Monochromize
        </Button>
      </Form>
    </div>
  );
};

export default FormGroup;
