import React from 'react'

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return <form {...props}>{children}</form>
}

export default Form
