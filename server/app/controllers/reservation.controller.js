const db = require("../models");
const { reservation : Reservation } = db;

exports.reservation = async (req, res) => {
    console.log('접속 성공')
    console.log(req.body)
    const reservation = new Reservation({
        name : req.body.name,
        phone : req.body.phone,
        date : req.body.date,
        option : req.body.option,
        text : req.body.text,
        amount : req.body.amount,
        payment : req.body.payment,
        RVstatus : '상담 신청 완료'
    })
    await reservation.save((err, result)=>{
        if(err){
            res.status(500).json(err)
        }
        res.status(200).json({message : "성공"})
    })
}

exports.confirm = async (req, res) => {
    console.log('접속')
    Reservation.find({ phone : req.body.phone }).then(result=>
        res.status(200).json(result)
    )
}