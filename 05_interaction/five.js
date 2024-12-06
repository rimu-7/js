const countryCodes = [
  "Bangladesh",
  "United States",
  "Canada",
  "India",
  "Australia",
  "United Kingdom",
  "China",
  "Japan",
  "France",
  "Germany",
];

countryCodes.forEach(function (countryCode) {
  // console.log(countryCode);
});
countryCodes.forEach((items) => {
  // console.log(items);
});

function printMe(items) {
  // console.log(items);
}
countryCodes.forEach(printMe);

countryCodes.forEach((item, index, array) => {
  // console.log(item, index, array);
});

const codingLanguages = [
    {
      languageName: "python",
      languageFileName: "py"
    },
    {
      languageName: "javascript",
      languageFileName: "js"
    },
    {
      languageName: "java",
      languageFileName: "java"
    },
    {
      languageName: "c++",
      languageFileName: "cpp"
    },
    {
      languageName: "ruby",
      languageFileName: "rb"
    },
    {
      languageName: "swift",
      languageFileName: "swift"
    },
    {
      languageName: "php",
      languageFileName: "php"
    },
    {
      languageName: "go",
      languageFileName: "go"
    },
    {
      languageName: "rust",
      languageFileName: "rs"
    },
    {
      languageName: "kotlin",
      languageFileName: "kt"
    },
    {
      languageName: "typescript",
      languageFileName: "ts"
    },
    {
      languageName: "scala",
      languageFileName: "scala"
    },
    {
      languageName: "perl",
      languageFileName: "pl"
    },
    {
      languageName: "haskell",
      languageFileName: "hs"
    },
    {
      languageName: "erlang",
      languageFileName: "erl"
    },
    {
      languageName: "lua",
      languageFileName: "lua"
    },
    {
      languageName: "sql",
      languageFileName: "sql"
    },
    {
      languageName: "matlab",
      languageFileName: "m"
    },
    {
      languageName: "r",
      languageFileName: "r"
    },
    {
      languageName: "julia",
      languageFileName: "jl"
    },
    {
      languageName: "vb.net",
      languageFileName: "vb"
    },
    {
      languageName: "c#",
      languageFileName: "cs"
    }
  ];
  
  codingLanguages.forEach((item) => {
    console.log(`${item.languageName}:${item.languageFileName}`);
  });
   