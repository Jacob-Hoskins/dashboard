exports.createAccountPage = (req, res, next) => {
  res.status(200).render("signUpPage");
};

exports.loginPage = (req, res, next) => {
  res.status(200).render("loginPage");
};
