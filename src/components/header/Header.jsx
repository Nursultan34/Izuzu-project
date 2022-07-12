import React from 'react'
import header from '../../css/Header.css';
import logo from '../../images/Logo.png'
import Lupa from '../../images/icon/Lupa.svg'
import twitter from '../../images/icon/twitter.png'
import facebook from '../../images/icon/facebook.png'
import instagram from '../../images/icon/instagram.png'
import vk from '../../images/icon/vk.png'

function Header() {
  return (
    <div className='Header'>
      <div className='container'>
        <img src={logo} alt="logo"  className='Logo'/>
        <div className='right-section'>
            <img src={Lupa} alt="Lupa" className='Lupa' />
            <h1 className='number'>8(495) 777-77-77</h1>
            <img src={vk} alt="vk" className='vk' />  
            <img src={instagram} alt="" className='instagram'/>
            <img src={facebook} alt="" className='facebook' />
            <img src={twitter} alt="" className='twitter' />
        </div>
     </div>
    </div>
  )
}

export default Header