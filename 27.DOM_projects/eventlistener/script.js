let lis = document.getElementsByTagName("li");

let lisArr = Array.from(lis);

lisArr.forEach(item => {
  item.addEventListener(
    "click",
    e => {
      e.stopPropagation();
      e.stopPropagation();
      //   console.log(e.target);
      let removeIt = e.target.parentNode;
      removeIt.parentNode.removeChild(removeIt);
    },
    true
  );
});
