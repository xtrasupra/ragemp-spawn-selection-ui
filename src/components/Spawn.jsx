import React, { Component } from 'react';

//CSS
import './CSS/style.css'

//SVG
import Logo from './SVG/Logo.png'
import City from './SVG/City.svg?react'
import Bober from './SVG/Bober.svg?react'
import TextLosSantos from './SVG/Text_LosSantos.svg?react'
import TextLosSantosActive from './SVG/Text_LosSantosActive.svg?react'
import TextPaletoBayActive from './SVG/TextPaletoBayActive.svg?react'
import TextPaletoBay from './SVG/TextPaletoBay.svg?react'

//SVGLightKit
import LightGreen from './SVG/LightKitSVG/LightGreen.svg'
import LightWhite from './SVG/LightKitSVG/LightWhite.svg'

//PNG
import LosSantos from './Item/LosSantos.webp'
import PaletoBay from './Item/PaletoBay.webp'
import Criminal from './Item/Criminal.webp'
import SLS from './Item/SLS.webp'
import SLSActive from './Item/SLSActive.webp'
import Palma1 from './Item/Palma-1.webp'
import Palma2 from './Item/Palma-2.webp'
import Police from './Item/Police.webp'

class Spawn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      hoveredpaleto: false
    };
  }

  render() {
    const { hovered } = this.state;
    const { hoveredpaleto } = this.state;
    return (
      <div className='bg__spawn--static_map'>
        <img 
          src={Logo}
          alt=''
          style={{
            position: 'absolute',
            paddingTop: '45px',
            paddingLeft: '45px',
            width: '100px'
          }}
        />
        <img src={Palma1} className='palma---1' alt=''/>
        <img src={Palma2} className='palma---2' alt=''/>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          width: '100%',
          position: 'absolute'
        }}>
          <img src={LightWhite} alt='' />
        </div>
        <div className='light__kit--svg--2'>
          <img src={LightGreen} alt='' style={{width: '300px'}}/>
          <img src={LightGreen} alt='' style={{transform: 'scale(-1, 1)', width: '300px'}}/>
        </div>
        <div className='text--los--santos_general'>
          {hovered ? (
            <TextLosSantosActive className='text--los--santos_active' />
          ) : (
            <TextLosSantos className='text--los--santos_noactive' />
          )}
        </div>
        <div className='text--paleto--bay_general'>
          {hoveredpaleto ? (
            <TextPaletoBayActive className='text--paleto--bay_active' />
          ) : (
            <TextPaletoBay className='text--paleto--bay_noactive' />
          )}
        </div>
        <div className='ls--paleto--navigation__button'>
          <div className='isolation--rgb--lossantos'>
            <div className='svg--item--city__ls'><City className='city-svg--general'/></div>
          </div>
          <div className='los-santos__click__spawn--navigation--1' // Los Santos
              onMouseEnter={() => this.setState({ hovered: true })}
              onMouseLeave={() => this.setState({ hovered: false })}>
            {/* <div className='svg--item--city__ls'><City className='city-svg--general'/></div> */}
            <div className='los-santos--wrapper'>
              <img src={LosSantos} alt='' className='image__slide--los-santos' />
            </div>
              <span className='button__change--lossantos-1'>Мой путь хакинг и район!</span>
              {hovered && (
                <span className='button__change--lossantos-2--event'>Мой путь хакинг и район!</span>
              )}
            <div className='text--los--santos__1'>Los-Santos</div>
            <img 
              className='text--sls__anim'
              alt=''
              src={SLS}
            />
              {hovered && (
                <img src={SLSActive} alt='' className='text--sls__anim--active'/>
              )}
            <img src={Criminal} alt='' className='criminal--image-b' />
          </div>
          <div className='isolation--rgb--paletobay'>
            <div className='svg--item--bober__pb'><Bober className='bober-svg--general'/></div>
          </div>
          <div className='paleto-bay__click__spawn--navigation--2' /* Paleto */
              onMouseEnter={() => this.setState({ hoveredpaleto: true })}
              onMouseLeave={() => this.setState({ hoveredpaleto: false })}>
            <div className='paleto-bay--wrapper'>
              <img src={PaletoBay} alt='' className='image__slide--paleto-bay' />
            </div>
              <span className='button__change--paletobay-1'>Мне нужен порядок!</span>
              {hoveredpaleto && (
                <span className='button__change--paletobay-2--event'>Мне нужен порядок!</span>
              )}
              <div className='text--paleto--bay__1'>Paleto-Bay</div>
            <img 
              className='text--sls__anim-2'
              alt=''
              src={SLS}
            />
              {hoveredpaleto && (
                <img src={SLSActive} alt='' className='text--sls__anim--active-2'/>
              )}
            <img src={Police} alt='' className='criminal--image-b' />
          </div>
        </div>
      </div>
    );
  }
}

export default Spawn;
