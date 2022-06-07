const {
    db,
    users
} = require("../components/database");
const response = require("../components/response");
const Crypto = require("crypto");

module.exports = async (req, res, next) => {
    
    try {
        
        // Check for empty headers
        if(typeof req.headers.token !== 'undefined' || typeof req.headers.username !== 'undefined' || typeof req.headers.timestamp !== 'undefined') {
            const secretKey = process.env.SECRET_KEY
            // Check User Data
            return await users.findOne({raw: true, where: { username: req.headers.username }})
                .then(result => {
                    if(result){
                        const token = Crypto.createHmac('sha256', secretKey).update(req.headers.username+req.headers.timestamp).digest('hex');
                        // console.log(`Token: ${token}`)
                        if(token == req.headers.token){
                            req.isAuthenticated = 1;
                            next();
                        }else{
                            console.error("Invalid authentication token");
                            req.isAuthenticated = 0;
                            next();
                        }

                    }else{
                        console.error("Invalid username");
                        req.isAuthenticated = 0;
                        next();
                    }
                })
            
        }else{
            console.error("Authentication token, username, timestamp is required");
            req.isAuthenticated = 0;
            next();
        }

    } catch (error) {
        
        console.error(error)
        return response.res500(res, "Internal server error")

    }

}