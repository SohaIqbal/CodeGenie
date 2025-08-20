import { Router } from 'express';
import { body } from 'express-validator';
import * as  auth from '../middleware/authMiddleware.js';
import * as usercontroller from '../controllers/userController.js';
const router = Router();

router.post('/signup',
    body('fullname').notEmpty().withMessage('Full name is required'),
    body('email')   
    .matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)
    .withMessage("Please enter a valid email (e.g., example@gmail.com)"),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),


    

    
    usercontroller.createuserController);


router.post('/login',
        body('email').matches(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)
        .withMessage("Please enter a valid email (e.g., example@gmail.com)"),
        body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
        
    
        
        usercontroller.loginController);


//  router.get('/profile',auth.authuser,usercontroller.profileController);
    
// router.get('/logout' ,usercontroller.logoutController);


// router.post('/ask', usercontroller.getaicontroller);

export default router;