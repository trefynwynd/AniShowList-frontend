import React from 'react';
import {Grid, Image, Segment } from 'semantic-ui-react'

const Profile = props => {
  return (
    <>
      <div>
        <h1>Profile & Watching list of <br /> user with ID { props.currentUser }</h1>
      </div>

      <Grid stackable columns={2} centered>
    <Grid.Column>
      <Segment>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
    </>
  )
}

export default Profile