import React from 'react'
import '../../css/ThirdMain.css'
import photo1 from '../../images/icon/1.png'
import photo2 from '../../images/icon/2.png'
import photo3 from '../../images/icon/3.png'
import photo4 from '../../images/icon/7.png'
import card from '../../images/icon/card.png'
import covid from '../../images/icon/covid.png'
import krug from '../../images/icon/krug.png'

function ThirdMain() {
  return (
    <div className='third-main2'>
       <img src={krug} alt=""  className='krug-photo'/>
        <img src={krug} alt=""  className='krug-photo'/>
           <div className='arrow-3' >
              
               <div></div>
              
           </div>
           <div className='arrow-4' >
              
              <div></div>
             
          </div>
        <h1 className='third-h1'>Необходимые документы</h1>
        
      <ul className='third-ul'>
        <img src={photo1} alt="" className='photo1'/>
        <h2 className='third-h2'>Паспорт транспортного средства (ПТС)</h2>
      </ul>
      <ul className='third-ul2'>
        <img src={photo2} alt="" className='photo1'/>
        <h2 className='third-h3'>Генеральная доверенность </h2>
        <p className='third-p2'>(если вы не являетесь собственником)</p>
      </ul>
      <ul className='third-ul3'>
        <img src={photo3} alt="" className='photo1'/>
        <h2 className='third-h4'>Все комплекты ключей</h2>
      </ul>
      <ul className='third-ul4'>
        <img src={card} alt="" className='photo1'/>
        <h2 className='third-h5'>Личный паспорт</h2>
      </ul>
      <ul className='third-ul5'>
        <img src={covid} alt="" className='photo1'/>
        <h2 className='third-h6'>Док-ты о сервисном обслуживании </h2>
      </ul>
      <ul className='third-ul6'>
        <img src={photo4} alt="" className='photo1'/>
        <h2 className='third-h6'>Св-во о регистрации автомобиля </h2>
      </ul>
   
    </div>
  )
}

export default ThirdMain