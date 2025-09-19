const colorChange = (value) => {
  let colours = (document.body.style.backgroundColor = value);

  colours = JSON.stringify(colours);
  sessionStorage.setItem("colorSelected", colours);
};

let colorSaved = sessionStorage.getItem("colorSelected");
colorSaved = JSON.parse(colorSaved);
document.body.style.backgroundColor = colorSaved;
