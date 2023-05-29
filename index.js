function RemoveWarning(language) {
  let warning = null;
  if (language == "chinese") {
    warning = document.querySelector("#chinese_warning");
  } else {
    warning = document.querySelector("#english_warning");
  }
  warning.style.display = "none";
};

function Bio(language) {
  let bio = null;
  let port = null;
  let welcome = null;
  if (language == "chinese") {
    RemoveWarning(language);
    bio = document.querySelector("#chinese_bioSection");
    port = document.querySelector("#chinese_portSection");
    welcome = document.querySelector("#chinese_welcome");
  } else {
    RemoveWarning(language);
    bio = document.querySelector("#english_bioSection");
    port = document.querySelector("#english_portSection");
    welcome = document.querySelector("#english_welcome");
  };

  bio.style.display = "flex";
  port.style.display = "none";
  welcome.style.color = "rgb(240, 255, 255)"
};

function Port(language) {
  let bio = null;
  let port = null;
  let welcome = null;
  if (language == "chinese") {
    RemoveWarning(language);
    bio = document.querySelector("#chinese_bioSection");
    port = document.querySelector("#chinese_portSection");
    welcome = document.querySelector("#chinese_welcome");
  } else {
    RemoveWarning(language);
    bio = document.querySelector("#english_bioSection");
    port = document.querySelector("#english_portSection");
    welcome = document.querySelector("#english_welcome");
  };
  
  bio.style.display = "none";
  port.style.display = "block";
  welcome.style.color = "rgb(240, 255, 255)"
};

function ToChinese() {
  const chineseContentDiv = document.querySelector('#chinese');
  chineseContentDiv.style.display = "block";
  const toChBtn = document.querySelector('#toChBtn');
  toChBtn.style.color = "rgb(255, 50, 50)";

  const englishContentDiv = document.querySelector('#english');
  englishContentDiv.style.display = "none";
  const toEnBtn = document.querySelector('#toEnBtn');
  toEnBtn.style.color = "rgb(218, 218, 218)";
};

function ToEnglish() {
  const englishContentDiv = document.querySelector('#english');
  englishContentDiv.style.display = "block";
  const toEnBtn = document.querySelector('#toEnBtn');
  toEnBtn.style.color = "rgb(20, 110, 255)";

  const chineseContentDiv = document.querySelector('#chinese');
  chineseContentDiv.style.display = "none";
  const toChBtn = document.querySelector('#toChBtn');
  toChBtn.style.color = "rgb(218, 218, 218)";
};