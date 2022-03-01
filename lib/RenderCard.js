const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../dist");

const render = employees => {
  const html = [];

  html.push(...employees
      .map(employee => renderEmployee(employee)));

  return renderMain(html.join(""));

};

const renderEmployee = employee => {
  let template = fs.readFileSync(path.resolve(templatesDir, `${employee.role}.html`), "utf8");
  template = replacePlaceholders(template, "name", employee.name);
  template = replacePlaceholders(template, "role", employee.role);
  template = replacePlaceholders(template, "email", employee.email);
  template = replacePlaceholders(template, "id", employee.id);
  template = replacePlaceholders(template, "special", employee.special);
  return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "index.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};

// Explained at https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
const replacePlaceholders = (template, placeholder, value) => {
    const holder = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(holder, value);
};

module.exports = render;