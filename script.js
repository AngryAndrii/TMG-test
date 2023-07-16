const codes = {
  Afghanistan: "+93",
  Albania: "+355",
  Algeria: "+213",
  Andorra: "+376",
};

const countrySelect = document.querySelector("#contry-select");
const phoneElem = document.querySelector("#phone");

countrySelect.addEventListener("change", function () {
  phoneElem.value = codes[countrySelect.value];
});
