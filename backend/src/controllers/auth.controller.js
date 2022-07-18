import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

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
      const hashPass = await bcrypt.hash(password, 12)
      const newUser = new User({
        name,
        username,
        email,
        hashPass,
        picture
      })

      const user = await newUser.save()

      return res.status(201).json(user)

    } catch (error) {
      return res.status(500).json({
        error: "Registration Failed",
        msg: error
      })
    }
  }

  async login(req, res) {
    try {
      let { username } = req.body
      const user = await User.findOne({ username })
     
      if (!user) {
        return res.status(400).json({
        error: "Wrong credentials"
      })
      }
      const validated = await bcrypt.compare(req.body.password, user.password)

      if (!validated) {
        return res.status(400).json({
          error: "Wrong credentials"
        })
      }
      let {password, ...others} = user._doc
      return res.status(200).json({
        Success: "Login attemp successfully",
        others
      })
    }catch (error) {
      return res.status(500).json({
        error: "Login Failed!",
        msg: error
      })
    }
  }
}
export default new AuthController