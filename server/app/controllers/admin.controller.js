const db = require("../models");
const { reservation : Reservation } = db;

exports.reservation = async (req, res) => {

    await Reservation.find({}).then(result=>
        res.status(200).json(result)
    )
}
exports.ready = async (req, res) => {

    await Reservation.updateOne({_id : req.body._id}, {$set : {RVstatus : '상담 신청 완료'}}).then(result=>
        res.status(200).json(result)
    )
}

exports.confirm = async (req, res) => {

    await Reservation.updateOne({_id : req.body._id}, {$set : {RVstatus : '접수 완료'}}).then(result=>
        res.status(200).json(result)
    )
}
exports.deny = async (req, res) => {

    await Reservation.updateOne({_id : req.body._id}, {$set : {RVstatus : '상담 거절'}}).then(result=>
        res.status(200).json(result)
    )
}