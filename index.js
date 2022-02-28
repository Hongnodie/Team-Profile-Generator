// npm package inclusion
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
// Local file inclusion
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Template helper code added
const RenderCard = require("./src/RenderCard");
