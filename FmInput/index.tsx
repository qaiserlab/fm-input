import React from 'react';
import { useField } from 'formik';
import InputProps from 'antd/lib/input';
import { Input } from 'antd';
import { PropsInterface } from './schema'

export default function FmInput(props: PropsInterface) {
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
