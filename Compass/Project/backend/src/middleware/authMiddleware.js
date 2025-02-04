import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Check for token in cookie or Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    // Replace 'fghjoopwertyuikjhgfdsx' with the same secret key you used during JWT signing
    const decoded = jwt.verify(token, 'fghjoopwertyuikjhgfdsx'); 
    req.user = decoded; // Attach decoded user info to request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
