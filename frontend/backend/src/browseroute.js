const db = require('./db');

const login  = (req , res)=>{
    const sql = "SELECT user_name , password from student where user_name =? and password = ? ";
    const value = [
        req.body.userName,
        req.body.password,
    ]
  

    db.query( sql , value , (err , data)=>{
        if(err) res.json("sql conecting error");
        if(data.length > 0){
            return res.json(1);
        }else {
            return res.json(0);
        }
        
    })
    
}

const signup = (req, res) => {
    const { userName, email, parsword } = req.body;

    
    const checkEmailQuery = 'SELECT email FROM registation WHERE email = ?';
    db.query(checkEmailQuery, [email], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length > 0) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        
    const insertUserQuery = 'INSERT INTO registation (user_name, email, password) VALUES (?, ?, ?)';
    db.query(insertUserQuery, [userName, email, parsword], (err) => {
        if (err) {
            console.error('Error inserting into the database:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        return res.status(201).json({ message: 'Registration successful' });
        });
    });
};



module.exports = {login , signup}