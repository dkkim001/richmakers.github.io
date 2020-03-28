function updateStart2() {
    loan_change_result2();
}

function updateEnd2() {
    loan_change_result2();
}

function updateAge2() {
    loan_change_result2();
}


function loan_interest_reset() {
    document.getElementById("loan_amt").value = "";
    document.getElementById("interest_rate").value = "";
    document.getElementById("loan_period").value = "";
    document.getElementById("neglect_period").value = "";
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
    var loan_amt_value = document.getElementById("loan_amt").value;
    var interest_rate_value = document.getElementById("interest_rate").value;
    var loan_period_value = document.getElementById("loan_period").value;
    var neglect_period_value = document.getElementById("neglect_period").value;
    document.getElementById("loan_amt").value = numberWithCommas(
        loan_amt_value
    );
    document.getElementById("interest_rate").value = numberWithCommas(
        interest_rate_value
    );

    loan_amt_value = numberWithOutCommas(loan_amt_value);
    interest_rate_value = numberWithOutCommas(interest_rate_value);
    neglect_period = numberWithOutCommas(neglect_period);

    if (
        !isNaN(loan_amt_value) &&
        loan_amt_value != "" &&
        !isNaN(interest_rate_value) &&
        interest_rate_value != "" &&
        !isNaN(loan_period_value) &&
        loan_period_value != "" &&
        !isNaN(neglect_period_value) &&
        neglect_period_value != ""
    ) {

        //부자지수 = (순자산액 × 10) ÷ (나이 × 연간 총소득)
        loan_amt_value *= 10000;
        interest_rate_value *= 10000;
        var resultData =
            (loan_amt_value * 10) / (loan_period_value * interest_rate_value);

        var num = resultData * 100;
        num = num.toFixed(0);

        var tpl = `<b>대출 이자</b>
                        `;



        // tpl = tpl.replace("#num#", num);
        // tpl = tpl.replace("#message#", message);

        document.getElementById("resultArea").innerHTML = tpl;
    } else {
        document.getElementById("resultArea").innerHTML = "";
    }
}