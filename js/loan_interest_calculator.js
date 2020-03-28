function updateStart2() {
    loan_change_result2();
}

function updateEnd2() {
    loan_change_result2();
}

function updateAge2() {
    loan_change_result2();
}


function reset() {
    document.getElementById("loan_start2").value = "";
    document.getElementById("loan_end2").value = "";
    document.getElementById("loan_age2").value = "";
    loan_change_result2();
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

function loan_change_result2() {
    var loan_start2_value = document.getElementById("loan_start2").value;
    var loan_end2_value = document.getElementById("loan_end2").value;
    var loan_age2_value = document.getElementById("loan_age2").value;
    document.getElementById("loan_start2").value = numberWithCommas(
        loan_start2_value
    );
    document.getElementById("loan_end2").value = numberWithCommas(
        loan_end2_value
    );

    loan_start2_value = numberWithOutCommas(loan_start2_value);
    loan_end2_value = numberWithOutCommas(loan_end2_value);

    if (
        !isNaN(loan_start2_value) &&
        loan_start2_value != "" &&
        !isNaN(loan_end2_value) &&
        loan_end2_value != "" &&
        !isNaN(loan_age2_value) &&
        loan_age2_value != ""
    ) {
        //부자지수 = (순자산액 × 10) ÷ (나이 × 연간 총소득)
        loan_start2_value *= 10000;
        loan_end2_value *= 10000;
        var resultData =
            (loan_start2_value * 10) / (loan_age2_value * loan_end2_value);

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