function adminAuth(req, res, next) {
  const token = req.headers["authorization"];

  if (token === "admin123") {
    console.log("Admin authenticated");
    next();
  } else {
    res.status(401).json({ message: "Unauthorized: Admin token missing or invalid" });
  }
}

function userAuth(req, res, next) {
  const token = req.headers["authorization"];

  if (token === "user123") {
    console.log("User authenticated");
    next();
  } else {
    res.status(401).json({ message: "Unauthorized: User token missing or invalid" });
  }
}


// function adminAuth  (req, res, next)  {
//     console.log("Admin Auth middleware");
//    next();
//     }

// function userAuth  (req, res, next) {
//     console.log("user auth is middleware");
//     next();
// }

module.exports = {
    adminAuth, userAuth
};
