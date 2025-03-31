import React from 'react'
import s from './Products.module.css'
import { useState, useEffect } from 'react';
import { useDogStore } from "../zustand/store";

const Products = () => {

    const { dogs, fetchDogs, removeDog, likeDog } = useDogStore();

    useEffect(() => {
      fetchDogs();
    }, [fetchDogs]);

    const handleLike = (dogId: string) => {
        likeDog(dogId);
      };
    
      const handleRemove = (dogId: string) => {
        removeDog(dogId);
      };

  return (
    <div className={s.container}>
      <div>
        <h1 className={s.title}>🐶 Список собак</h1>

        {dogs.length === 0 && <p className={s.loading}>Загрузка...</p>}

        <div className={s.grid}>
          {dogs.map((dog) => (
            <div key={dog.id} className={s.card}>
              <img src={dog.url} alt="Dog" />
              <div className={s.cardContent}>
                <h3 className={s.cardTitle}>Lorem.</h3>
                <p className={s.cardDescription}>Lorem ipsum dolor sit amet consectetur.</p>
                <div className={s.cardActions}>
                  <button className={s.likeBtn} onClick={() => handleLike(dog.id)}>❤️ Лайк</button>
                  <button className={s.removeBtn} onClick={() => handleRemove(dog.id)}>❌ Удалить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products