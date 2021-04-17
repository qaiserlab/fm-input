import React from 'react';
import { useField } from 'formik';
import InputProps from 'antd/lib/input';
import { Input } from 'antd';

export interface FmInputProps extends InputProps {
  name: string;
  label?: string;
}

export default function FmInput(props: FmInputProps) {
  const [field, meta] = useField(props as any);

  return (
    <React.Fragment>
      { props.label && <label>{props.label}</label> }
      <Input {...field} {...props} />

      {meta.touched && meta.error ? (
         <div style={{color: 'red'}}>{meta.error}</div>
       ):null}
    </React.Fragment>
  )
}
