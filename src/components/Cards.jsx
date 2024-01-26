import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>En İyi Eğitim Videoları!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/baskan.jpg'
              text='Meram Tarihçesi'
              label='Tarih'
              path='/egitim'
            />
            <CardItem
              src='images/mega.jpeg'
              text='Meram Gelişim Akademisi Yazılım Eğitimleri-Web'
              label='Yazılım-ReactJs'
              path='/egitim'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mega1.jpeg'
              text='Meram Gelişim Akademisi Yazılım Eğitimleri-Yapay Zeka'
              label='Yazılım-Yapay Zeka-Python'
              path='/egitim'
            />
            <CardItem
              src='images/resim.jpg'
              text='Meram Sanat Eğitimi Videoları'
              label='Sanat'
              path='/egitim'
            />
            <CardItem
              src='images/astronomi.jpg'
              text='Meram Astronomi Eğitimi Videoları'
              label='Astronomi'
              path='/egitim'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;