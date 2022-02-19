import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
      e.preventDefault()
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const limpaCampos = () => {
    setForm(initialState);
  };

  return { form, onChange, limpaCampos };
};