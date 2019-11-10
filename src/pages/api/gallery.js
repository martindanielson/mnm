import cloudinary from 'cloudinary'

export default (_, res) => {
  cloudinary.v2.api.resources_by_tag(
    "test",
    {
      cloud_name: 'mnm',
      api_key: '216586136354532',
      api_secret:'kSBlkPQyruZj-zAWxd0UA9C3Fp8'
    },
    (_, { resources }) => {
      res.json({
        resources,
      })
    }
  )
}
