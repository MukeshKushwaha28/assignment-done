import User from '../models/userModel.js';

// @desc Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc Get user by ID
export const getUserById = async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.findById({_id:req.params.id});
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc Update user
export const updateUser = async (req, res) => {
  const { name, email, phone, role } = req.body;

  try {
    const user = await User.findById({_id:req.params.id});

    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.phone = phone || user.phone;
      user.role = role || user.role;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc Delete user
export const deleteUser = async (req, res) => {
  try {
    
    // Find and delete the user by ObjectId
    // console.log(req.params.id)
    const user = await User.findByIdAndDelete({_id:req.params.id});
    // console.log(user);

    if (user) {
      res.json({ message: 'User removed successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
