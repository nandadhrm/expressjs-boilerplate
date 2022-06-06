"use strict";

const response = require("../../components/response");
const components = require("./hello.module");

exports.hello = async (req, res) => {

    if(!req.body?.userId) {
        const users = components.getAllUser().catch(error => { throw error })
    } 

    return response.res200(res, "000", "Hello there!");

}