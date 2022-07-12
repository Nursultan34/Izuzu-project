import React from 'react'
import '../../css/SecondMain.css'
import  d from '../../images/d.png'
import  plus from '../../images/icon/plus.png'


function SecondMain() {
   
    
  return (
    <div>
       <div className='container10'>
           <h1 className='main-h1'>Процесс обмена автомобил</h1>
           <div className='krug'></div>
           <div className='arrow-1 r2' >
              
               <div></div>
              
           </div>
           <div className='krug2'></div>
           <div className='arrow-2 r1' >
              
               <div></div>
              
           </div>
         
        
           <ul className='ul' >
               <h2 className='h2-main'>Заявка на автообмен</h2>
               <p className='p2-main'>Вы отправляете заявку, и мы приезжаем в удобное для вас место и время для осмотра автомобиля.</p>
               <h1 className='h1-main'>01</h1>
           </ul>
           <ul className='ul2'>
               <h2 className='h3-main'>Выбор автомобиля</h2>
               <p className='p4-main'>Вы выбираете авто на сайте или мы подбираем его по вашим параметрам.</p>
               <h1 className='h4-main'>02</h1>
           </ul>
           <ul className='ul3'>
               <h2 className='h5-main'>Предложение</h2>
               <p className='p3-main'>Мы делаем вам предложение по обмену вашего автомобиля.</p>
               <h1 className='h9-main'>03</h1>
           </ul>
          
       </div>
       <div className='car-photo'>
           <h1 className='d1'>Преимущества обмена</h1>
           <img src={d} alt="" className='d-image'/>
           <h2 className='d2'>Безопасность</h2>
           <img src={plus} className="plus" alt="" />
           <div className='d-line2'></div>
           <h2 className='d3'>Большой выбор</h2>
           <img src={plus} className="plus"  alt="" />
           <div className='d-line3'></div>
           <h2 className='d4' >Диагностика</h2>
           <img src={plus} className="plus"  alt="" />
           <div className='d-line4'></div>
           <h2 className='d5'>В одном месте</h2>
           <img src={plus} className="plus"  alt="" />
           <div className='d-line5'></div>
           <h2 className='d6'>Любое авто</h2>
           <img src={plus} className="plus" alt="" />
           <div className='d-line6'></div>
           <h2 className='d7'>Авто на первый взнос</h2>
           <img src={plus} className="plus"  alt="" />
           <div className='d-line7'></div>
           <p className='d-p4'>Сотрудничая с нами, Вы можете быть уверены в своей личной и финансовой безопасности.</p>
           <p className='d-p5'>Большой выбор новых и подержанных автомобилей для обмена.</p>
           <p className='d-p6'>Оценка и диагностика автомобиля производится бесплатно.</p>
           <p className='d-p7'>Обмен будет произведен в одном месте под контролем специалиста по trade-in.</p >
           <p className='d-p8'>Принимаем автомобили любых марок. Вне зависимости от его возраста и пробега.</p>
           <p className='d-p9'>Ваш автомобиль может быть принят нами в качестве первого взноса по кредиту.</p>
       </div>
    </div>
  )
}

export default SecondMain
