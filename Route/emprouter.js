const express = require ("express");

const { updateemp, deleteemp, displayemp,singleview,empinsert } = require("../controllers/Employee");

const router = express.Router();

router.post("/emp_insert",empinsert);
router.get("/display",displayemp);
router.delete("/delete/:id",deleteemp);
router.get("/view/:id",singleview);
router.put("/update/:id",updateemp);
module.exports=router;