document.write("<script src='../js/rich_index_calculator.js'></script>");
document.write("<script src='../js/loan_interest_calculator.js'></script>");

function init() {
  includeHTML();
  var footerIndex = document.location.href.substring(document.location.href.lastIndexOf("/") + 1);
  var selectedFooter = '<span class="fa-stack fa-lg"> <i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-calculator fa-stack-1x"></i> </span>';
  var nomalFooter = '<i class="fa fa-calculator fa-lg"></i>';
  if ('index.html' == footerIndex) {
    footerIndex = 0;
  } else if ('index2.html' == footerIndex) {
    footerIndex = 1;
  } else if ('index3.html' == footerIndex) {
    footerIndex = 2;
  } else if ('index4.html' == footerIndex) {
    footerIndex = 3;
  }

  var footer = document.querySelectorAll(".footer__icon")[footerIndex];
  footer.innerHTML(selectedFooter);
}

function numberWithOutCommas(x) {
  return x.toString().replace(/[","]/g, "");
}
function numberWithCommas(x) {
  x = numberWithOutCommas(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


window.addEventListener("load", function (event) {
  setCss();
});

function setCss() {
  var richCal = document.getElementById("richCalcul");
  //richCal.style.background =
  //"linear-gradient(-45deg, #ffc000 50%, #ffdf7f 50%)";
  //richCal.style.fontWeight = "600";

  var richCalText = document.querySelectorAll(
    "div.richCalcul td:nth-child(2) input"
  );
  richCalText.forEach((a) => (a.style.color = "red"));

  var richCal1td = document.querySelectorAll("div.richCalcul td:nth-child(1)");
  richCal1td.forEach((a) => (a.style.textAlign = "right"));

  var richCal2td = document.querySelectorAll("div.richCalcul td:nth-child(2)");
  richCal2td.forEach((a) => (a.style.textAlign = "left"));

  var addBtn = document.querySelectorAll("div.richCalcul .addBtn");
  addBtn.forEach(
    (a) => (
      (a.style.background = "white"),
      (a.style.border = "1px solid silver"),
      (a.style.width = "60px")
    )
  );
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*"); for (i = 0; i < z.length; i++) {
    elmnt = z[i]; file = elmnt.getAttribute("include-html"); if (file) {
      xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText; elmnt.removeAttribute("include-html"); includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send(); return;
    }
  }
}

