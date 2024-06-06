import React, { useState, useEffect } from 'react';
import api from "../../services/api";

import { Container } from "./styled";

export function Card({ valorBusca }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const buscarData = async () => {
      try {
        const response = await api.get('/cardlist.json');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    buscarData();
  }, []);

  const PegarType = {
    "1": "Paisagem",
    "2": "Flor",
    "3": "Pizza"
  };

  const pegarClass = {
    "1": "paisagem",
    "2": "flor",
    "3": "pizza"
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  let dataFiltrada = data;

  if (valorBusca.trim() !== "") {
    dataFiltrada = data.filter(item =>
      item.title && item.description.toLowerCase().includes(valorBusca.toLowerCase())
    );
  }

  return (
    <Container>
      {dataFiltrada.map(item => (
        <div key={item.id} className='cart'>
          <div className='img'>
            <span className='close' onClick={() => handleDelete(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32" d="M368 368L144 144M368 144L144 368"/>
              </svg>
            </span>
            <img  src={item.img} alt={item.title} />
            <span className={`tipo ${pegarClass[item.type] || ''}`}>
              {PegarType[item.type] || ''}
            </span>
          </div>
          <div className='description'>
            <div className='name'>
              <h1>{item.title}</h1>
            </div>
            <div className='text'>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
