"use strict";

const { 
    users 
} = require("../../components/database")

exports.getAllUser = () => {
    return users.findAll({ raw:true })
}