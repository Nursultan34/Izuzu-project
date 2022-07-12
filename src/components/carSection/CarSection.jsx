import React from 'react';
import '../../css/CarSection.css';
import seltos from '../../images/seltos.png'
import k5 from '../../images/k5.png'
import stringer from '../../images/stringer.png'
import x2 from '../../images/x2.png'
import sportage from '../../images/sportage.png'
import kio from '../../images/kio.png'
import ceed from '../../images/ceed.png'
import pikanto from '../../images/picanto.png'

function CarSection() {

  return (
    <div className="container2">
      <h1 className="h12">Машины в наличии</h1>
      <div className='car-section1'>
        <img src={seltos} alt="" className='seltos'/>
        <h1 className='seltos-h1'>Kia Seltos 2022</h1>
        <p className='seltos-p1'>64000 км / 2 л / Автомат / Полный</p>
        <p className='seltos-p2'>Москва</p>
        <h1 className='seltos-h1-1'>1 149 900 ₽</h1>
       
        <h2 className='seltos-h2'>1 959 900 ₽</h2>
      </div>
      <div className='car-section2'>
        <img src={k5} alt="" className='seltos2-2'/>
        <h1 className='seltos-h23'>KIA K5 2022</h1>
        <p className='seltos-p3'>48000 км / 2 л / Автомат / Полный</p>
        <p className='seltos-p4'>Москва</p>
        <h1 className='seltos-h1-2'>2 349 900 ₽</h1>
       
        <h2 className='seltos-h3'>2 734 900 ₽</h2>
      </div>
      <div className='car-section3'>
        <img src={stringer} alt="" className='seltos3'/>
        <h1 className='seltos-h23'>KIA stinger 2022</h1>
        <p className='seltos-p3'>48000 км / 2 л / Автомат / Полный</p>
        <p className='seltos-p4'>Москва</p>
        <h1 className='seltos-h1-2'>2 549 900 ₽</h1>
       
        <h2 className='seltos-h3'>2 934 900 ₽</h2>
      </div>
      <div className='car-section4'>
        <img src={x2} alt="" className='seltos4'/>
        <h1 className='seltos-h24'>BMW X2 2022</h1>
        <p className='seltos-p8'>48000 км / 2 л / Автомат / Полный</p>
        <p className='seltos-p5'>Москва</p>
        <h1 className='seltos-h1-4'>2 549 900 ₽</h1>
       
        <h2 className='seltos-h4'>2 934 900 ₽</h2>
      </div>
      <div className='car-section5'>
        <img src={sportage} alt="" className='seltos5'/>
        <h1 className='seltos-h1-5'>KIA SPORTAGE 2022</h1>
        <p className='seltos-p1-4'>64000 км / 2 л / Автомат / Полный</p>
        <p className='seltos-p2-4'>Москва</p>
        <h1 className='seltos-h1-6'>2 799 900 ₽</h1>
       
        <h2 className='seltos-h2-4'>3 259 900 ₽</h2>
      </div>
      <div className='car-section6'>
        <img src={kio} alt="" className='seltos6'/>
        <h1 className='seltos-h1-5'>KIA RIO 2022</h1>
        <p className='seltos-p1-5'>32000 км / 2 л / Автомат / Полный</p>
        <p className='seltos-p2-4'>Москва</p>
        <h1 className='seltos-h1-7'>1 149 900 ₽</h1>
       
        <h2 className='seltos-h2-8'>1 959 900 ₽</h2>
      </div>
      <div className='car-section7'>
        <img src={ceed} alt="" className='seltos9'/>
        <h1 className='seltos-h1-5'>KIA CEED 2022</h1>
        <p className='seltos-p1-4'>12000 км / 2 л / Автомат / Полный</p>
        <p className='seltos-p2-4'>Москва</p>
        <h1 className='seltos-h1-6'>1 149 900 ₽ </h1>
       
        <h2 className='seltos-h2-4'>1 899 900 ₽</h2>
      </div>
      <div className='car-section8'>
        <img src={pikanto} alt="" className='seltos2'/>
        <h1 className='seltos-h23-3'>KIA PICANTO 022</h1>
        <p className='seltos-p3-2'>12000 км / 2 л / Автомат / Полный</p>
        <p className='seltos-p4-2'>Москва</p>
        <h1 className='seltos-h1-10'>1 399 900 ₽</h1>
       
        <h2 className='seltos-h10'>1 590 900 ₽</h2>
      </div>
      <h2 className='h2-102'>Загрузить все</h2>
      <div className='lin'></div>
    </div>
  );
}

export default CarSection;
