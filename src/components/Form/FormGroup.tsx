import { Form, Button } from "react-bootstrap";
import { FormEvent, useState } from "react";
import FormLabel from "./FormLabel";

export default function FormGroup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {["album", "artist"].map((val: string) => (
        <FormLabel name={val} key={val} />
      ))}
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
