module.exports = (err,req, res,next) => {
    res.status(err.statucode).json(err);
};
