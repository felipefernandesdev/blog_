import User from "../models/user.model.js"
import Post from "../models/post.model.js"
import bcrypt from "bcrypt"

class UserController {
  async find(req, res) {
    try {
      const users = await User.find({}, { password: 0 })
      return res.status(200).json(users)

    } catch (error) {
      return res.status(500).json({
        error: "unable to find data, server offline, come back later!",
        msg: error
      })
    }
  }

  async getById(req, res) {
    const {id} = req.params
    try {
      const user = await User.findById(id)
      if (!user) return res.status(400).json({
        error: "User if not exists",
        msg: "try to get user with ID correctly"
      })
      const {password, ...others} = user._doc
      return res.status(201).json(others)

    } catch (error) {
      return res.status(500).json({
        error: "unable to find data, server offline, come back later!",
        msg: error
      })
    }
  }

  async update(req, res) {
    const { id } = req.params
    if (id !== req.body.id) {
      return res.status(401).json({ 
        error: "User not compatible com user aticvated",
        msg: "Impossible updated user"
      })
    }
    if (req.body.password) {
       req.body.password = await bcrypt.hash(req.body.password, 12)
    }
    try {          
      const updatedUser = await User.findByIdAndUpdate(id, {
        $set: req.body
      }, {new: true})
      res.status(201).json(updatedUser)      
    } catch (error) {
      res.status(500).json({
        error: "not possible update",
        msg: error
      })
    }
  }
  
  async delete(req, res) {
    const { id } = req.params
      if (id === req.body.id) {
        try {   
          const user = await User.findById(id)
        try {
        await Post.deleteMany({username: user.username})
        await User.findByIdAndDelete(id)
        res.status(201).json({
        success: "User has ben deleted..."
      })  
        } catch (error) {
          res.status(500).json({
        error: "not possible delete",
        msg: error
      })
        }  
    } catch (error) {
      res.status(500).json({
        error: "not possible delete",
        msg: error
      })
    }
    } else {
      return res.status(401).json({ 
        error: "User not compatible com user aticvated",
        msg: "Impossible delete user"
      })
      
    }    
  }


}

export default new UserController