'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../style/card.module.css';
import projetos from '../utils/data';


// Componente CardProjects
const CardProjects = ({ name, description, objective, local, image }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} layout="responsive" width={379} height={293} />
      <div className={styles.card_description}>{name}{description}</div>
      <div className={styles.card_local}>{local}</div>
      <div className={styles.card_objective}>{objective}</div>
      <button className={styles.card_button}>Leia Mais</button>
    </div>
  );
};

// Componente principal
export default function Card() {
  const [termo, setTermo] = useState('');
  const [cardsFiltrados, setCardsFiltrados] = useState(projetos);

  useEffect(() => {
    if (termo) {
        setCardsFiltrados(
        projetos.filter(projeto =>
          projeto.name.toLowerCase().includes(termo.toLowerCase()) ||
          projeto.description.toLowerCase().includes(termo.toLowerCase())
        )
      );
    } else {
        setCardsFiltrados(projetos);
    }
  }, [termo]);

  return (

    <div >
        <div className={styles.input}>
        <input className={styles.input}
        type="search"
        placeholder="Filtrar projetos..."
        value={termo}
        onChange={e => setTermo(e.target.value)} />
        </div>
      <div className={styles.card_grid}>
        {cardsFiltrados.map(projeto => (
          <CardProjects
            key={projeto.id}
            name={projeto.name}
            description={projeto.description}
            objective={projeto.objective}
            local={projeto.local}
            image={projeto.image}
          />
        ))}
      </div>
    </div>

  );
}
