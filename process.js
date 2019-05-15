const formidable = require('formidable')

const db = require('./db.js')

exports.getIndex = (req, res) => {
    let sql =  `SELECT * FROM star`
    db.query(sql,(result)=>{
        res.render('index', {
            result
        })
    })
}

exports.getAdd = (req, res) => {
    res.render('add', {})
}

exports.postAdd = (req,res) => {
    let form = new formidable.IncomingForm()
    form.parse(req, (err,fields) => {
        if(err) return
        fields.img = '0.jpg'
        let sql = `INSERT INTO star (name, age, img) VALUES ('${fields.name}','${fields.age}','${fields.img}')`
        db.query(sql, (results) => {
            if (results.affectedRows >= 1) {
                // 3.0 返回处理结果
                res.send('<script>alert("新增成功");window.location="/"</script>')
            }
        })
    })
}