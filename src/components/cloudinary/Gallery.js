import React, { Component } from 'react'
import { CloudinaryContext} from 'cloudinary-react'
import cloudinary from 'cloudinary-core'
import { Card, Icon, Image as Image } from 'semantic-ui-react'

var cl = new cloudinary.Cloudinary({cloud_name: "mnm", secure: true});

class CloudinaryGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gallery: []
    }
  }

  componentDidMount() {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(({ resources }) => this.setState({ gallery: resources }))
      .catch((xhr, status, error) => console.log(xhr, status, error))
  }

  render() {
    return (
      <CloudinaryContext cloudName="mnm">
        <Card.Group itemsPerRow={4}>
          {
            this.state.gallery.map(data => {
              return (
                <Card raised key={data.public_id}>
                  <Image src={cl.url(data.public_id, { quality: 60, crop: "fill", gravity: "faces", width: 300, height: 300 })} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Something</Card.Header>
                    <Card.Meta>Something smaller</Card.Meta>
                    <Card.Description>Longer info</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="user" /> Hey
                  </Card.Content>
                </Card>
              )
            })
          }
        </Card.Group>
      </CloudinaryContext>
    )
  }
}

export default CloudinaryGallery
