Package.describe({
  name: "uzumaxy:prevent-backspace",
  summary: "Prevents the backspace from navigating back in the browser. ",
  version: "0.0.1",
  git: "https://github.com/uzumaxy/meteor-prevent-backspace"
});

Package.onUse(function(api) {
  api.addFiles([
    "uzumaxy:prevent-backspace/boots.js"
  ], ["client"]);
});