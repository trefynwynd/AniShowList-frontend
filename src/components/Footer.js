import React from 'react';
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <List floated='right' horizontal>
            <List.Item disabled>
              © 2020 - SEIR921
            </List.Item>
            <List.Item href='#'>AniShowList</List.Item>
          </List>

          <List horizontal>
            <List.Item><Link to={'/about'}>About This Project</Link></List.Item>
          </List>
        </div>
      </footer>
    </>
  )
}

export default Footer