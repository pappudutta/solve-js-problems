const folders = [
  "Test & DSA",
  "1. reverse-string",
  "2. day-time",
  "3. current-window",
  "4. minMax",
  "5. areaOfTriangle",
  "6. sumArray",
  "7. Abbreviate a Two Word Name",
  "8. Square(n) Sum",
  "9. binaryString",
  "10. hoisting",
  "11. Closures",
  "12. Scope",
  "13. CountDown",
  "14. counter",
  "15. Apply Transform Over Each Element in Array",
  "16. iife",
  "17. higherOrderFunction",
  "19. map-function",
  "20. recursion (backtraking algorithm)",
  "21. palindromeNumber",
  "22. oops",
  "23.object",
  "24.Number&Math",
  "25.loops",
  "26.memoization",
  "27.DOM_projects",
  "28.asyncOperations",
];

function generateLinks() {
  const container = document.getElementById("links-container");

  folders.forEach(folder => {
    const link = document.createElement("a");
    link.href = `./${folder}/index.html`;
    link.textContent = folder;

    const div = document.createElement("div");
    div.appendChild(link);

    container.appendChild(div);
  });
}

generateLinks();
