const express = require('express');
const router = express.Router()

// @Desc Login/Landing page
// @Route GET /
router.get('/', (req, res) =>{
    res.render('login', {
        layout: 'login',
    })
   // console.log("Get Root!!")    
})

// @Desc Dashboard 
// @router GET /dashboard
router.get('/dashboard', (req, res) => {
     res.render('dashboard')
    //console.log("Get Dashboard!!")

})


module.exports = router