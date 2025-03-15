const BadRequest = require("../errors/BadRequest");
const ObjectId = require("mongoose").Types.ObjectId;

const validIds = (req, res, next) => {
  try {
    const ids = req.params;
    for (const id of ids) {
      if (id.include("Id")) {
        if (!(ObjectId.isValid(id) && String(new ObjectId(id)) === id)) {
          throw new BadRequest("Your ids are not valid");
        }
      }
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = validIds;
