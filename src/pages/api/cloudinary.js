import cloudinary from 'cloudinary'

export default (req, res) => {
  const params_to_sign = JSON.parse(req.body)
  const api_secret = 'kSBlkPQyruZj-zAWxd0UA9C3Fp8'

  const signature = cloudinary.utils.api_sign_request(params_to_sign, api_secret)

  res.json({
    signature,
  })
}
