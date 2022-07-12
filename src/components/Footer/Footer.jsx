import React from 'react';
import '../../css/Footer.css';
import logo from '../../images/icon/logo-footer.png'
import Logo from '../../images/Logo.png'

function Footer() {
  return (
    <div className="footer">
      <img src={Logo} alt="logo"  className='Logo3'/>
      <h2 className="h2-footer">
        
        <span className="h3-footer">Авто обмен</span> — розничная сеть автомобилей с пробегом, где
        каждое авто проходит тщательную проверку и диагностику, чтобы покупатель мог купить
        автомобиль, получив честную информацию о его состоянии.
      </h2>
      <h1 className="h1-footer">Оставьте заявку</h1>
      <input type="text"  className='input-footer2' placeholder='Имя'/>
      <input type="text"  className='input-footer' placeholder='Телефон' />
      
      <button className='footer-button'>Отправить</button>
      <h2 className='contact'>Контактный телефон</h2>
      <h2 className='contact-number'>8 (495) 777-77-77</h2>
      <img src={logo} alt="" className='logo-footer' />
      <h2 className='footer-text'>Соц. сети</h2>
    </div>
  );
}

export default Footer;
