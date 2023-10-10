import React, { useState } from 'react'
import './nav.css'
import { FiHome } from 'react-icons/fi'
import { FaUserAlt } from 'react-icons/fa'
import { BsBook } from 'react-icons/bs'
import { RiServiceFill } from 'react-icons/ri'
import { AiFillMessage } from 'react-icons/ai'

const Nav = () => {
  const [active, makeActive] = useState('#')
  return (
    <nav>
      <a
        href="javascript:void(0);"
        className={active === '#' ? 'active' : ''}
        onClick={() => {
          makeActive('#')
        }}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        className={active === 'about' ? 'active' : ''}
        onClick={() => {
          makeActive('about')
        }}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        className={active === 'experience' ? 'active' : ''}
        onClick={() => {
          makeActive('experience')
        }}
      >
        <BsBook />
      </a>
      <a
        href="#services"
        className={active === 'services' ? 'active' : ''}
        onClick={() => {
          makeActive('services')
        }}
      >
        <RiServiceFill />
      </a>
      <a
        href="#contact"
        className={active === 'contact' ? 'active' : ''}
        onClick={() => {
          makeActive('contact')
        }}
      >
        <AiFillMessage />
      </a>
    </nav>
  )
}

export default Nav
