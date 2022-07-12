import React from 'react';
import strelka10 from '../../images/icon/strelka.png'


function Third() {
  return (
    <div>
         <h1 className="h10-third">Часто задаваемые вопросы</h1>
      <div>
       <p className='p1-third'>Где пройдет сделка?</p>
       <img src={strelka10} alt="" className='img-strelka10'/>
       <div className='div-2'></div>
       <p className='p2-third'>Как оформляется договор при выкупе?</p>
       <img src={strelka10} alt="" className='img-strelka11'/>
       <div className='div-3'></div>
       <p className='p3-third'>Время работы?</p>
       <img src={strelka10} alt="" className='img-strelka12'/>
       <div className='div-4'></div>
       <p className='p4-third'>Сколько времени занимает оформление?</p>
       <img src={strelka10} alt="" className='img-strelka13'/>
       <div className='div-5'></div>
       <p className='p5-third'>Загрузить все</p>
       <div className='div-6'></div>
      </div>
    </div>
  );
}

export default Third;
