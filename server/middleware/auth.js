const jwt = require("jsonwebtoken")

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorize! Login again.",
      });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.json({ success: false, message: "Not Authorized! Try Again" });
    }

    next();
  } catch (e) {
    console.log(e.message);
    res.json({ success: false, message: e.message });
  }
};

export default authUser;


