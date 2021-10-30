import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Kindly Provide Your Fullname']
  },
  age: {
    type: Number,
    default: 0,
  },
  date:{
      type:Date,
      default:new Date()
  },
  roleAndPermission:[{role_name:String,role_permission:String}],
});

const User = mongoose.model("Users", UserSchema);

// module.exports = User;
export default User