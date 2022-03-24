const bcrypt = require('bcrypt');

const { Users } = require('../models/users')

const signUp = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        const user = new Users({
            email: req.body.email,
            password: hash,
            type: "user",
            name: {
                first_name: req.body.first_name,
                last_name: req.body.last_name
            },
            date_of_birth: req.body.date_of_birth,
            premium: false,
        });
        user.save();
        res.status(201).json({
            status: 'created'
        })
    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

const signIn = async (req, res) => {
    try {
        let user = await Users.findOne({ email: req.body.email }).select('email type password -_id');
        if (!user) 
            return res.status(400).send('Invalid Email')
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        
        if (!validPassword) 
            return res.status(400).send('Password.')

        res.status(200).json({
            email: user.email,
            type: user.type
        });

    } catch (err) {
        res.status(500).send('Internal Server Error')
    }
}

module.exports = {
    signUp,
    signIn
}