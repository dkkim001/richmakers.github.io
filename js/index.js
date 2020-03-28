document.write("<script src='rich_index_calculator.js'></script>");

function init() {
  includeHTML();

  // var rich_start2 = document.getElementById("rich_start2");
  // rich_start2.addEventListener("input", updateStart2);
  // var rich_end2 = document.getElementById("rich_end2");
  // rich_end2.addEventListener("input", updateEnd2);
  // var rich_age2 = document.getElementById("rich_age2");
  // rich_age2.addEventListener("input", updateAge2);

}
function updateStart2() {
  rich_change_result2();
}

function updateEnd2() {
  rich_change_result2();
}

function updateAge2() {
  rich_change_result2();
}

function reset() {
  document.getElementById("rich_start2").value = "";
  document.getElementById("rich_end2").value = "";
  document.getElementById("rich_age2").value = "";
  rich_change_result2();
  document.getElementById("resultArea").innerHTML = "";
}
function loan() {
  document.location.href = "loanInterest.html";
}
function addMoney(id, money) {
  document.getElementById(id).value =
    Number(numberWithOutCommas(document.getElementById(id).value)) +
    Number(money);

  updateStart2();
}
function numberWithOutCommas(x) {
  return x.toString().replace(/[","]/g, "");
}
function numberWithCommas(x) {
  x = numberWithOutCommas(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function rich_change_result2() {
  var rich_start2_value = document.getElementById("rich_start2").value;
  var rich_end2_value = document.getElementById("rich_end2").value;
  var rich_age2_value = document.getElementById("rich_age2").value;
  document.getElementById("rich_start2").value = numberWithCommas(
    rich_start2_value
  );
  document.getElementById("rich_end2").value = numberWithCommas(
    rich_end2_value
  );

  rich_start2_value = numberWithOutCommas(rich_start2_value);
  rich_end2_value = numberWithOutCommas(rich_end2_value);

  if (
    !isNaN(rich_start2_value) &&
    rich_start2_value != "" &&
    !isNaN(rich_end2_value) &&
    rich_end2_value != "" &&
    !isNaN(rich_age2_value) &&
    rich_age2_value != ""
  ) {
    //부자지수 = (순자산액 × 10) ÷ (나이 × 연간 총소득)
    rich_start2_value *= 10000;
    rich_end2_value *= 10000;
    var resultData =
      (rich_start2_value * 10) / (rich_age2_value * rich_end2_value);

    var num = resultData * 100;
    num = num.toFixed(0);

    var tpl = `<b>나의 부자지수는 </b>
                      <font class="txtf1" style="font-size:16pt"><b style="color:red">#num#%</b></font>
                      <br /><font class="txtf2"><strong>#message#</strong></font>
                      <br><br>
<b>부자지수(Wealth Inex)</b><br>		
부자지수 = (순자산 × 10) ÷ (나이 × 연간 총소득) <br>
미국의 부자학 교수 토마스 스탠리 박사가 개발한 지수입니다<br><br>
				50% 이하 : 재테크에 문제 있음<br>
				100% 이하 : 평균 수준, 노력 필요<br>
				200% 이하 : 재테크를 잘 하는 편<br>
				200% 이상 : 재테크를 아주 잘함<br>

        <br><b>부자지수의 의미</b><br>
				- 순자산이 많을수록, 나이가 어릴수록 부자지수가 높습니다.<br>
				- 연수입이 많아도 소득을 잘 활용하여 순자산을 늘리지 않고는 부자지수가 높아 질 수 없습니다.<br>
				- 결국 지출과 부채를 줄이고 연수입을 늘려 순자산을 늘리는 것을 하루빨리 시작하는 것이 중요함을 보여줍니다.<br> 
			
				<br><b>우리나라 직장인 평균 부자지수</b><br>

				<table border="0" cellspacing="1" cellpadding="3" bgcolor="#dddddd" width="100%">
				 <tbody> 
				  <tr bgcolor="#f7f7f7"> 
				   <td valign="center"> 나이</td> 
				   <td valign="center"> 순자산</td> 
				   <td valign="center"> 연봉</td> 
				   <td valign="center"> 부자지수</td> 
				  </tr> 
				  <tr bgcolor="#ffffff"> 
				   <td valign="center"> 20~24</td> 
				   <td valign="center"> 2100만원</td> 
				   <td valign="center"> 1674만원</td> 
				   <td valign="center"> 57%</td> 
				  </tr> 
				  <tr bgcolor="#ffffff">  
				   <td valign="center"> 25~29</td> 
				   <td valign="center"> 5400만원</td> 
				   <td valign="center"> 2241만원</td> 
				   <td valign="center"> 89%</td> 
				  </tr> 
				  <tr bgcolor="#ffffff">  
				   <td valign="center"> 30~34</td> 
				   <td valign="center"> 9400만원</td> 
				   <td valign="center"> 2939만원</td> 
				   <td valign="center"> 100%</td> 
				  </tr> 
				  <tr bgcolor="#ffffff">  
				   <td valign="center"> 35~39</td> 
				   <td valign="center"> 1억7000만원</td> 
				   <td valign="center"> 3443만원</td> 
				   <td valign="center"> 133%</td> 
				  </tr> 
				  <tr bgcolor="#ffffff">  
				   <td valign="center"> 40~44</td> 
				   <td valign="center"> 2억4000만원</td> 
				   <td valign="center"> 3589만원</td> 
				   <td valign="center"> 159%</td> 
				  </tr> 
				  <tr bgcolor="#ffffff">  
				   <td valign="center"> 45~49</td> 
				   <td valign="center"> 2억6000만원</td> 
				   <td valign="center"> 3499만원</td> 
				   <td valign="center"> 158%</td> 
				  </tr> 
				  <tr bgcolor="#ffffff">  
				   <td valign="center"> 50~54</td> 
				   <td valign="center"> 3억1000만원</td> 
				   <td valign="center"> 3507만원</td> 
				   <td valign="center"> 170%</td> 
				  </tr> 
				 </tbody> 
				</table>
        <br><br><br>`;

    if (num <= 50) {
      message = "재테크에 문제가 있습니다.";
    } else if (num <= 100) {
      message = "평균 수준이며, 재테크에 노력이 필요합니다.";
    } else if (num <= 150) {
      message = "재테크를 잘하는 편입니다.";
    } else {
      message = " 재테크를 아주 잘합니다. ";
    }

    tpl = tpl.replace("#num#", num);
    tpl = tpl.replace("#message#", message);

    document.getElementById("resultArea").innerHTML = tpl;
  } else {
    document.getElementById("resultArea").innerHTML = "";
  }
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

