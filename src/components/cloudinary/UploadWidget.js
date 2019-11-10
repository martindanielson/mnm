import React from 'react'

const generateSignature = (callback, params_to_sign) =>
  fetch('/api/cloudinary', {
    method: 'POST',
    body: JSON.stringify(params_to_sign)
  })
    .then(res => res.json())
    .then(({ signature }) => callback(signature))
    .catch((xhr, status, error) => console.log(xhr, status, error))

const uploadWidget = () =>
  cloudinary.openUploadWidget({
    cloudName: 'mnm',
    apiKey: '216586136354532',
    uploadSignature: generateSignature,
    uploadPreset: 'ml_default',
    tags:['test']
  },
  (_, result) => console.log(result))

const CloudinaryUploadWidget = () =>
  <button onClick={ uploadWidget }>Upload</button>

export default CloudinaryUploadWidget;
