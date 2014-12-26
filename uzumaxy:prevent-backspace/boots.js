Meteor.startup(function () {
  var captureBackspace = function (e) {
    var rxBool = /TRUE/i;
    var rxTag = /INPUT|SELECT|TEXTAREA/i;
    if (e.which == 8) { // 8 == backspace
      if (rxBool.test(e.target.contentEditable)) {
        return;
      }
      if (!rxTag.test(e.target.tagName) || e.target.disabled || e.target.readOnly) {
        e.preventDefault();
      }
    }
  };

  if (window.addEventListener) {
    window.addEventListener('keydown', captureBackspace, true);
  }
  else if (document.attachEvent) {
    document.attachEvent('onkeydown', captureBackspace);
  }
  else {
    document.addEventListener('keydown', captureBackspace, true);
  }
});