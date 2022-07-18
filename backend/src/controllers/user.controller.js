import User from "../models/user.model.js"

class UserController {
  async find(req, res) {
    try {

      const users = await User.find()
      return res.status(200).json(users)

    } catch (error) {
      return res.status(500).json({
        error: "unable to find data, server offline, come back later!",
        msg: error
      })
    }
  }
}

export default new UserController