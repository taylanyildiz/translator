const translator = require("@parvineyvazov/json-translator");
const fs = require("fs");

async function translate(path) {
  try {
    fs.readFileSync(path);
    let translatedJson = await translator.translateFile(
      path,
      translator.languages.English,
      translator.languages.Russian,
    );
    console.log(translatedJson);
  } catch (error) {
    console.log(error);
  }
}

translate("./langs/en.json");
