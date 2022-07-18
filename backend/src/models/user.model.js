import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  profilePic: {
    type: String,
    default: ""
  }
}, {timestamps: true})

UserSchema.pre('save', async function (next) {
  const hashPass = await bcrypt.hash(this.password, 12)
  this.password = hashPass
  next()
})

export default mongoose.model("User", UserSchema)