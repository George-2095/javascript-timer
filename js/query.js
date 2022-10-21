const date = new Date()

document.querySelector("#stylecss").href = `styles/style.css?${date.getTime()}=${Math.random()}`
document.querySelector("#mainjs").src = `js/main.js?${date.getTime()}=${Math.random()}`