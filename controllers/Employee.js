const Employeeschema = require("../model/empSchema")

const empinsert = async (req,res)=>{
    try{
    const{name,no,phono,email,salary,address,age,gender,design}=req.body;
       
        const datas = await new Employeeschema({
            Name:name,
            empid:no,
            Phoneno:phono,
            Email:email,
            Salary:salary,
            Address:address,
            Age:age,
            Gender:gender,
            designation:design
        });
        

        const savedata = await datas.save();
        res.send(savedata);

    }

    catch(err){
       console.log(err)
       res.status(500).send("Internal some error occured")
    }
};

const displayemp = async(req, res) => { 
    try{
        const employee = await Employeeschema.find()
            res.json(employee) 

    }
    catch(err){
        console.log(err)
        res.status(500).send("Internal some error occured")

    }
}

const deleteemp = async(req, res)=>{
    try{
        let employee = await Employeeschema.findById(req.params.id);
        if(!employee){
            return res.status(404).send("not found")
        }
        else{
            employee = await Employeeschema.findByIdAndDelete(req.params.id);
            return res.json({success:"Deleted successfully",employee})
        }
        
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal error")
    }
}

const singleview = async(req,res)=>{
    try{
        let employee = await Employeeschema.findById(req.params.id)
        if(!employee){
            return res.status(400).send("not found")
        }
        res.json(employee)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Internal some error occured")
    }
}
const updateemp = async(req, res)=>{
    try{
        const{name,no,phono,email,salary,address,age,gender,design}=req.body;
        const newemp = {};
        if(name) {newemp.name = name};
        if(no) {newemp.no = no};
        if(phono) {newemp.phono = phono};
        if(email) {newemp.email = email};
        if(salary) {newemp.salary = salary};
        if(address) {newemp.address = address};
        if(age) {newemp.age = age};
        if(gender) {newemp.gender = gender};
        if(design) {newemp.design = design};





        let employee = await Employeeschema.findById(req.params.id);
        if(!employee){
            return res.status(404).send("not found");
        }
        else{
            employee=await Employeeschema.findByIdAndUpdate(req.params.id);
            res.json(employee)
        }

       
    }
    catch(err){
       console.log(err)
        res.status(500).send("Internal some error occured")
    }
}
module.exports =  { empinsert,displayemp,deleteemp,singleview,updateemp }