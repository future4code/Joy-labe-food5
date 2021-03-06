import { Button, Card } from '@mui/material'
import {React, useState} from 'react'
import FooterContainer from "../../components/Footer/Footer";
import { useGetRestaurant } from '../../hooks/useGetRestaurant';
import { BASE_URL } from "../../constants/BASE_URL";
import CardRestaurant from '../../components/CardRestaurante/CardRestaurant';

export default function Home() {
  const [infoRestaurante] = useGetRestaurant(`${BASE_URL}/restaurants`)
  const [busca, setBusca] = useState("")
  const [select, setSelect] = useState("")

  console.log(infoRestaurante);
  const restauranteCategoria = infoRestaurante
  .filter((i) => i.category.toLowerCase().includes(select.toLocaleLowerCase()))
  
  const restauranteFiltrado = restauranteCategoria
  .filter((i) => i.name.toLowerCase().includes(busca.toLocaleLowerCase()))
  

  return (
    <div>
      <>
        <input
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option>Categoria</option>
          {infoRestaurante.map(i => <option>{i.category}</option>)}
        </select>

        {
          restauranteFiltrado.map(i =>
            <CardRestaurant 
              key={i.id}
              id={i.id}
              logoUrl={i.logoUrl}
              name={i.name}
              shipping={i.shipping}
            />)
        }
        <FooterContainer />
      </>
    </div>
  )
}