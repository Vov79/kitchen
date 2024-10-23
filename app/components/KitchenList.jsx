"use client";
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase'; 
import { collection, getDocs } from 'firebase/firestore';

const KitchenList = () => {
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKitchens = async () => {
      try {
        const kitchensCollection = collection(db, 'kitchen');
        const kitchenSnapshot = await getDocs(kitchensCollection);
        const kitchenList = kitchenSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setKitchens(kitchenList);
      } catch (err) {
        setError('Ошибка при загрузке данных: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchKitchens();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Список кухонь</h1>
      {kitchens.length === 0 ? (
        <p>Нет доступных кухонь.</p>
      ) : (
        <ul>
          {kitchens.map(kitchen => (
            <li key={kitchen.id}>
              <h2>{kitchen.title}</h2>
              {kitchen.imageUrls && kitchen.imageUrls.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {kitchen.imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`${kitchen.title} ${index + 1}`}
                      style={{ maxWidth: '200px', margin: '5px' }}
                    />
                  ))}
                </div>
              )}
              <p>Цена: {kitchen.price} лей</p>
              <p>Размеры: {kitchen.length} x {kitchen.width} x {kitchen.height} см</p>
              <p>Fațade: {kitchen.facades}</p>
              <p>Blat: {kitchen.blat}</p>
              <p>Producător: {kitchen.producer}</p>
              <p>Описание: {kitchen.description}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KitchenList;
