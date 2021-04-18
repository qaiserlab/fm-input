import React from 'react';
import { render } from 'react-dom';

import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';

import 'antd/dist/antd.css';
import { Button } from 'antd';

import FmInput from './FmInput';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First Name is too short!')
    .max(50, 'Last Name is too long!')
    .required('First Name is Required'),
  lastName: Yup.string(),
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is Required'),
});

function App() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values));
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props: FormikProps<Values>) => (
        <Form>
          <FmInput label={'First Name'} name={'firstName'} />
          <FmInput label={'Last Name'} name={'lastName'} />
          <FmInput label={'Email'} name={'email'} />
          
          &nbsp;
          <br />

          <Button 
            type={'primary'} 
            htmlType={'submit'}
            loading={props.isSubmitting}
          >
            Submit
          </Button>        
        </Form>
      )}
    </Formik>
  );
}

render(<App />, document.getElementById('root'));
