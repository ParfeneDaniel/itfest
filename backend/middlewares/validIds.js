const BadRequest = require("../errors/BadRequest");
const ObjectId = require("mongoose").Types.ObjectId;

const validIds = (req, res, next) => {
  const params = req.params;

  for (const param in params) {
    if (
      !(
        ObjectId.isValid(params[param]) &&
        String(new ObjectId(params[param]) === params[param])
      )
    ) {
      next(new BadRequest("Your ids are not valid"));
    }
  }

  next();
};

module.exports = validIds;
