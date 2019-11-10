import React, { Component } from 'react'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'

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
        {
          this.state.gallery.map(data => {
            return (
              <Image publicId={data.public_id} key={data.public_id}>
                <Transformation
                    crop="fill"
                    gravity="faces"
                    width="150"
                    height="150"
                    effect="sepia"
                />
              </Image>
            )
          })
        }
      </CloudinaryContext>
    )
  }
}

export default CloudinaryGallery
