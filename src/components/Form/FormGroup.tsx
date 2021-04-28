import { FC, FormEvent, useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormLabel from './FormLabel';
import FetchUtils from '../../utils/FetchUtils';
import { DataContext } from '../../contexts/DataContext';

type TFormGroup = FC<{ fields?: string[] }>;

export const FormGroup: TFormGroup = ({ fields = ['artist', 'album'] }) => {
  const [validated, setValidated] = useState(false);
  const { setData } = useContext(DataContext);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = await FetchUtils.invokeLambda(
        Array.from(formData.entries(), (array) => array[1])
      );
      if (data) {
        setData({
          imageSource: data.url,
          albumName: data.info,
          albumDescription: data.description,
        });
      }
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
