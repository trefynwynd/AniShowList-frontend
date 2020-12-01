import React from 'react';
import {Grid, Image, Segment } from 'semantic-ui-react'

const Profile = props => {
  return (
    <>
      <div>
        <p>Profile & Watching list of <br /> user with ID { props.currentUser }</p>
      </div>

      <Grid stackable columns={2} centered>
    <Grid.Column>
      <Segment>
      <p>Currently Watching:</p>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
      <p>Planning to Watch:</p>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
    </>
  )
}

export default Profile