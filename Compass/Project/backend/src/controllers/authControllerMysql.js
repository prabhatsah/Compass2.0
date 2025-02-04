import bcrypt from "bcryptjs";
import pool from "../config/mysqldb.js";

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Encrypt the password

    const [result] = await pool.query(
      'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)',
      [fullName, email, hashedPassword]
    );

    res.status(201).json({ success: true, message: 'User registered successfully', userId: result.insertId });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ success: false, message: 'Email already exists' });
    } else {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      console.log("Printing rows");
      console.log(rows);
  
      if (rows.length === 0) {
        return res.status(400).json({ success: false, message: 'Invalid email or password' });
      }
  
      const user = rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).json({ success: false, message: 'Invalid email or password' });
      }
  
      console.log("User verified.");

      // Remove sensitive data before sending a response
      delete user.password;
  
      console.log("Password deleted.");

      res.status(200).json({ success: true, message: 'Login successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  };


// export const Register = async (req, res) => {
//     try {
//       const { fullName, email, password } = req.body;
//       if (!fullName || !email || !password) {
//         return req.status(401).json({
//           message: "Invalid data",
//           success: false,
//         });
//       }
//       const user = await User.findOne({ email });
//       if (user) {
//         return res.status(401).json({
//           message: "This email is already used",
//           success: false,
//         });
//       }
  
//       const hashedPassword = await bcryptjs.hash(password, 10);
  
//       const newUser = await User.create({
//         fullName,
//         email,
//         password: hashedPassword,
//       });
  
//       return res.status(201).json({
//         message: "Account created successfully",
//         success: true,
//         user: {
//           id: newUser._id,
//           fullName: newUser.fullName,
//           email: newUser.email,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
