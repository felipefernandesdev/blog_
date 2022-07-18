import User from "../models/user.model.js";

class AuthController {
  async register(req, res) {
    try {
      const { name, username, email, password, picture } = req.body

      const userExists = await User.findOne({ email })
      if (userExists) {
        return response.status(400).json({
        error: "Not possible registration",
        message: "User already exists"
        })
      }      

      const newUser = new User({
        name,
        username,
        email,
        password,
        picture
      })

      const user = await newUser.save()

      return res.status(200).json(user)

    } catch (error) {
      return res.status(500).json({
        error: "Registration Failed",
        msg: error
      })
    }
  }
}
export default new AuthController