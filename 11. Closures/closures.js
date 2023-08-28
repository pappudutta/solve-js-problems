function x() {
  var a = 7;
  function y() {
    var b = 10;
    function z() {
      console.log(a, b);
    }
    z();
  }
  y();
}
x();
