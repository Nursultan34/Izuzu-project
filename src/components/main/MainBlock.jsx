import React from 'react'
import '../../css/MainBlock.css'
import ellipse from '../../images/icon/Ellipse.svg'
import car from '../../images/car.png'




function MainBlock(props) {

  return (
    <div className='main'>
        <h1 className='text'>Авто обмен</h1>
        <img src={ellipse} alt="" className='ellipse' />
        <p className='text2'>Розничная сеть автомобилей с пробегом, где каждое авто проходит тщательную проверку и диагностику, чтобы покупатель мог купить автомобиль, получив честную информацию о его состоянии.</p>
        <div className='second-main'>
            <h1 className='h1'>Заявка на обмен</h1>
            <input  className='input1' placeholder='Имя'/>
            <input  className='input2' placeholder='Телефон' />
            <button className='button'>Отправить</button>
        </div>
    
       <div className='red-block'>
    <div className='block-3'>
    <h2 className='navmenu-h2'>02</h2>
          <div className='line-nav'></div>
          <h2 className='navmenu-h3'>Рыночная цена</h2>
          <p className='navmenu-p'>Используем собственный сервис оценки, основанный на данных актуальных предложений и реальных сделок.</p>
    </div>
         <div className='block-2'>
         <h2 className='nav3'>03</h2>
          <div className='line-nav2'></div>
          <h2 className='navmenu-h4'>Обмен за один день</h2>
          <p className='navmenu-p2'>Оформляем документы и выдаем автомобиль в день передачи старого.</p>
         </div>
          <h1 className='h1-2'>Почему мы?</h1>
          <div className='block-1'>
          <h2 className='h2-1'>01</h2>
          <div className='line'></div>
          <h2 className='h2-4'>Скидка до 30 000 ₽</h2>
          <p className='p2'>Даём гарантированную скидку до 30 000 ₽ на выбранный для обмена авто.</p>
          </div>
          </div>
    </div>
  )
}

export default MainBlock