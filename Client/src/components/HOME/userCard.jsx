import React, { useEffect, useState } from 'react';
import "../STYLES/home.modules.css";
import Avatar from "../IMG/avatar.png"
import Nivel from "../IMG/level.png"
import Monedas from "../IMG/coin.png"
import axios from 'axios';

function UserCard({location}) {

  const [monedas, setMonedas] = useState(0);

  //GET para saber el estado del pago, si fue aprobado agregar las monedas al usuario en la bd
  useEffect(() => {
    (async function fetchData(){
      if(location.search !== ''){
        const respuesta = await axios.get(`http://localhost:3001/mercadopago/${location.search}`);
        console.log(respuesta.data)

        if(respuesta.data.status === 'approved'){
          setMonedas(2500) //insertar el valor de la compra en el usuario de la bd
        }
      }  
    }())
  } , [location])

  return (
    <div className="infoUser">
      <div className="avatarCard">
        <img src={Avatar} alt="Avatar" width={50} />
        <span>User97</span>
      </div>
      <div className="nameUser">
        <span><img src={Nivel} alt="Nivel" width={20} /> 7</span>
        <span><img src={Monedas} alt="Monedas" width={20}/> 400</span>
      </div>
    </div>
  );
}

export default UserCard;
