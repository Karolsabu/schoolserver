const { response } = require("express")
const admins = require("../Models/Adminmodel")
const students = require("../Models/Admissionformmodel")
const adminSignup = async (req, res) => {
    //destructure body data
    const { email, psw, cpsw } = req.body
    //check all fields are empty or not
    if (!email || !psw || !cpsw) {
        res.status(400).json("all fields are required")
    } else {
        try {
            //to resolve runtimee errors use try & catch block
            let preAdmin = await admins.findOne({ email })
            if (preAdmin) {
                res.status(400).json("Allready Exist")
            } else {
                //create object for new admin
                let newAdmin = new admins({ email, psw, cpsw })
                if (psw == cpsw) {
                    //save new admin
                    await newAdmin.save()
                    res.status(200).json(newAdmin)
                } else {
                    res.status(401).json("password are not matching")
                }


            }
        } catch {
            res.status(400).json("connection error");
        }

    }
}
const adminlogin = async (req, res) => {
    const { email, psw } = req.body
    if (!email || !psw) {
        res.status(400).json("all datas are required")
    }
    else {
        try {
            const admin = await admins.findOne({ email, psw })
            if (admin) {
                res.status(200).json(admin)
            }
            else {
                res.status(404).json("incorrect email or password")
            }
        }
        catch {
            res.status(400).json("connection error")
        }
    }
}
const studentdata = async (req, res) => {
    const { pupil, grdin, gender, occupation, phone, address, prevschool, std, tcdate, dob, place, nationality } = req.body
    if (!pupil || !grdin || !gender || !occupation || !phone || !address || !prevschool || !std || !tcdate || !dob || !place || !nationality) {
        res.status(400).json("all datas are required")
    }
    else {
        try {
            let studentdata = await students.findOne({ phone })
            if (studentdata) {
                res.status(400).json("student details already present")
            }
            else {
                let newstudentdata = new students({
                    pupil,
                    grdin,
                    gender,
                    occupation,
                    phone,
                    address,
                    prevschool,
                    std,
                    tcdate,
                    dob,
                    place,
                    nationality
                })
                await newstudentdata.save()
                res.status(200).json(newstudentdata)
            }
        } catch (error) {
            res.status(400).json("connection error", error)
        }
    }


}

    //get student data

    const getstudentdata=async(req,res)=>{
        try {
            const data=await students.find()
            if(data){
                res.status(200).json(data)
            }
            else{
                res.status(400).json("no data available")
            }
        } catch (error) {
            res.status(400).json("connection error", error)
            
        }
        }
module.exports = { adminSignup, adminlogin, studentdata,getstudentdata }