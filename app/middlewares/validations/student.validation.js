const checkEmpty = (req, res, next) => {
    const { fullName, age, numberClass } = req.body;
    if (fullName && age && numberClass) {
        next();
    } else {
        res.status(500).send("Không được để trống")
    }
}

const checkNumberClass = (req, res, next) => {
    const { numberClass } = req.body;

    if (numberClass >= 1 && numberClass <= 12) {
        next();
    } else {
        res.status(500).send("Vui lòng nhập giá trị từ 1 dến 12")
    }
}
module.exports = {
    checkEmpty,
    checkNumberClass
}