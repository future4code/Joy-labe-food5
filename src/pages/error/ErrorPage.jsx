import React from 'react'
import { ConteinerErro } from "./styled";
import { goToHome } from "./../../router/coodinator";
import { useHistory } from "react-router-dom";
export default function ErrorPage() {
  const history = useHistory();
  return (
    <>
      <ConteinerErro onClick={() => goToHome(history)} />

    </>
  )
}
