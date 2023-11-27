const express=require('express')
const { adminSignup, adminlogin, studentdata, getstudentdata } = require('../Controls/Logic')
const router=new express.Router()
//path for admin signup
router.post('/admin/admin-signup',adminSignup)
//path for admin login
router.post('/admin/admin-login',adminlogin)
//path for studentdata
router.post('/admin/studentdetails',studentdata)
router.get('/admin/getstudent',getstudentdata)

module.exports=router