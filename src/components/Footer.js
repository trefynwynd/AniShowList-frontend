import React from 'react';
import { Link } from 'react-router-dom'

import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <li><p>AniShowList</p></li>
          <li><p>Copyright 2020 - SEIR921</p></li>
          <li><Link to={'/about'}>About This Project</Link></li>
        </ul>
      </footer>
    </>
  )
}

export default Footer;
