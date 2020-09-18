// Dependencies
var mysql = require("mysql");
const inquirer = require("inquirer");
const confirm = require('inquirer-confirm');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employees"
}); 



