import React from 'react';
import '../../css/NewMenu.css';
import strelka from '../../images/icon/strelka.png';
import car2 from '../../images/car2.png';
import car3 from '../../images/car3.png';
import car4 from '../../images/car4.png';

function NewMenu() {
  return (
    <div className='Newmenu'>
      <div>
        <h1 className="h9">О компании</h1>
        <p className="p9">
          Наша компания выкупает авто с моментальной выплатой полной стоимости, наличными или на
          банковскую карту. Все сделки легальны, юридически грамотны, процедуры осуществляются на
          законных основаниях.
        </p>
        <h2 className="h3">Команда</h2>
        <img src={strelka} alt="" className="strelka" />
        <div className="line3"></div>
        <h2 className="h3-2">Партнеры</h2>
        <img src={strelka} alt="" className="strelka" />
        <div className="line3"></div>
        <h2 className="h3-3">Дилеры</h2>
        <img src={strelka} alt="" className="strelka" />
        <div className="line3"></div>
        <img src={car2} alt="" className="car2" />
        <img src={car3} alt="" className="car3" />
        <img src={car4} alt="" className="car4" />
        <div></div>
      </div>
      <div className='section'>
      <div className='arrow-8' >
              
              <div></div>
             
          </div>
          <div className='arrow-9' >
              
              <div></div>
             
          </div>
          <h1 className='our'>Наши преимущества</h1>
          <div className='span'>
              <h2 className='h2-10'>Юридическая чистота и прозрачность сделки </h2>
              <p className='p2-10'>Подписывается договор, заполняются все необходимые документы;</p>
          </div>
      </div>
      <div className='section'>
         
          <div className='span2'>
              <h2 className='h2-11'>Торг </h2>
              <p className='p2-11'>Если ваше транспортное средство в других компаниях оценили дороже, готовы пересмотреть цену в лучшую сторону;</p>
          </div>
      </div>
      <div className='section'>
      
          
          <div className='span3'>
              <h2 className='h2-12'>Выбор </h2>
              <p className='p2-12'>Можем предложить на обмен ТС любой марки и года выпуска в различном техническом состоянии.</p>
          </div>
      </div>
       <div className='section'>
          
          <div className='span4'>
              <h2 className='h2-13'>Оперативный осмотр </h2>
              <p className='p2-13'>По фотографии или с выездом на место;</p>
          </div>
      </div>
      <div className='section'>
          <div className='span5'>
              <h2 className='h2-14'>Быстро и дорого</h2>
              <p className='p2-14'>Всё происходит в течение одного дня, стоимость оценки составляет до 99% от рыночной цены;</p>
          </div>
      </div>
    </div>
  );
}

export default NewMenu;
