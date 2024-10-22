"use client"; 
import { useState } from 'react';
import { db, storage } from '../lib/firebase'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const CreateItem = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [facades, setFacades] = useState('');
  const [blat, setBlat] = useState('');
  const [producer, setProducer] = useState('');
  const [files, setFiles] = useState([]);

  const handleChangeFile = (event) => {
    setFiles(Array.from(event.target.files)); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const imageUrls = [];

      for (const file of files) {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);
        imageUrls.push(downloadURL); 
      }

      await addDoc(collection(db, 'kitchen'), {
        title: title || null,
        imageUrls: imageUrls,
        price: price ? parseFloat(price) : null,
        length: length ? parseFloat(length) : null,
        height: height ? parseFloat(height) : null,
        width: width ? parseFloat(width) : null,
        facades: facades || null,
        blat: blat || null,
        producer: producer || null,
        createdAt: new Date(),
      });

      // Сброс формы
      setTitle('');
      setPrice('');
      setLength('');
      setHeight('');
      setWidth('');
      setFacades('');
      setBlat('');
      setProducer('');
      setFiles([]);
      alert('Объект успешно добавлен!');
    } catch (error) {
      console.error('Ошибка при добавлении объекта: ', error);
      alert('Произошла ошибка при добавлении объекта.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label>Картинки:</label>
        <input 
          type="file" 
          accept="image/*" 
          multiple 
          onChange={handleChangeFile} 
        />
      </div>
      <div>
        <label>Цена:</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <div>
        <label>Lungime:</label>
        <input 
          type="number" 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
        />
      </div>
      <div>
        <label>înălțime:</label>
        <input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
        />
      </div>
      <div>
        <label>lățime:</label>
        <input 
          type="number" 
          value={width} 
          onChange={(e) => setWidth(e.target.value)} 
        />
      </div>
      <div>
        <label>Fațade:</label>
        <input 
          type="text" 
          value={facades} 
          onChange={(e) => setFacades(e.target.value)} 
        />
      </div>
      <div>
        <label>Blat:</label>
        <input 
          type="text" 
          value={blat} 
          onChange={(e) => setBlat(e.target.value)} 
        />
      </div>
      <div>
        <label>Producător:</label>
        <input 
          type="text" 
          value={producer} 
          onChange={(e) => setProducer(e.target.value)} 
        />
      </div>
      <button type="submit">Создать</button>
    </form>
  );
};

export default CreateItem;
