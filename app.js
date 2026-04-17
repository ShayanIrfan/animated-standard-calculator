function safeEval(expr) {
    var processed = expr.replace(/%/g, '/100');
    var openCount = (processed.match(/\(/g) || []).length;
    var closeCount = (processed.match(/\)/g) || []).length;
    for (var i = 0; i < openCount - closeCount; i++) {
        processed += ')';
    }
    try {
        var val = eval(processed);
        if (val === undefined || val === null) return '';
        return val;
    } catch(e) {
        return '';
    }
}

function getNumber(num) {
    var result = document.getElementById("result");
    result.innerHTML += num;
    var f_result = document.getElementById("f_result");
    var evalResult = safeEval(result.innerHTML);
    if (evalResult !== '') f_result.innerHTML = evalResult;
    var last_result = document.getElementById("last_result");
    last_result.innerHTML = result.innerHTML;
}

function getBracket() {
    var result = document.getElementById("result");
    var expr = result.innerHTML;
    var openCount = (expr.match(/\(/g) || []).length;
    var closeCount = (expr.match(/\)/g) || []).length;
    var lastChar = expr.slice(-1);

    if (openCount > closeCount && /[0-9)%]/.test(lastChar)) {
        result.innerHTML += ')';
    } else {
        result.innerHTML += '(';
    }

    var f_result = document.getElementById("f_result");
    var evalResult = safeEval(result.innerHTML);
    if (evalResult !== '') f_result.innerHTML = evalResult;
    var last_result = document.getElementById("last_result");
    last_result.innerHTML = result.innerHTML;
}

function getPercent() {
    var result = document.getElementById("result");
    var lastChar = result.innerHTML.slice(-1);
    if (!/[0-9)]/.test(lastChar)) return;
    result.innerHTML += '%';
    var f_result = document.getElementById("f_result");
    var evalResult = safeEval(result.innerHTML);
    if (evalResult !== '') f_result.innerHTML = evalResult;
    var last_result = document.getElementById("last_result");
    last_result.innerHTML = result.innerHTML;
}

function getOperator(opr) {
    var result = document.getElementById("result");
    var last_result = document.getElementById("last_result");
    result.innerHTML = last_result.innerHTML;
    result.innerHTML += opr;
}

function backspaceValue() {
    var result = document.getElementById("result");
    result.innerHTML = result.innerHTML.slice(0, -1);
    var f_result = document.getElementById("f_result");
    var evalResult = safeEval(result.innerHTML);
    f_result.innerHTML = evalResult !== '' ? evalResult : '';
    var last_result = document.getElementById("last_result");
    last_result.innerHTML = result.innerHTML;
    myFunction_3(y);
}

function clearResult() {
    var result = document.getElementById("result");
    result.innerHTML = null;
    result.style.transition = null;
    result.style.fontSize = null;
    var f_result = document.getElementById("f_result");
    f_result.innerHTML = null;
    var last_result = document.getElementById("last_result");
    last_result.innerHTML = null;
    var mid_label = document.getElementById("mid_label");
    mid_label.style.transition = null;
    mid_label.style.fontSize = null;
}

function myFunction(y) {
    if (y.matches) {
        var result = document.getElementById("result");
        var mid_label = document.getElementById("mid_label");
        mid_label.innerHTML = result.innerHTML;
        result.innerHTML = "";
        mid_label.style.transition = "all 0.5s ease 0s";
        mid_label.style.top = "68px";
        mid_label.style.opacity = "0";
        var f_result = document.getElementById("f_result");
        var last_result = document.getElementById("last_result");
        last_result.innerHTML = f_result.innerHTML;
        f_result.style.opacity = "0";
        last_result.style.transition = "top 0.5s ease 0s, font-size 0.5s ease 0s, color 0.5s ease 0s";
        last_result.style.top = "123px";
        last_result.style.color = "#343852";
        last_result.style.fontSize = "43px";
        last_result.style.opacity = "1";
    } else {
        var result = document.getElementById("result");
        var mid_label = document.getElementById("mid_label");
        mid_label.innerHTML = result.innerHTML;
        result.innerHTML = "";
        mid_label.style.transition = "all 0.5s ease 0s";
        mid_label.style.top = "80px";
        mid_label.style.opacity = "0";
        var f_result = document.getElementById("f_result");
        var last_result = document.getElementById("last_result");
        last_result.innerHTML = f_result.innerHTML;
        f_result.style.opacity = "0";
        last_result.style.transition = "top 0.5s ease 0s, font-size 0.5s ease 0s, color 0.5s ease 0s";
        last_result.style.top = "140px";
        last_result.style.color = "#343852";
        last_result.style.fontSize = "45px";
        last_result.style.opacity = "1";
    }
}

function myFunction_2(y) {
    if (y.matches) {
        if (result.innerHTML.length == 13) {
            result.style.transition = "all 0.2s ease 0s";
            result.style.fontSize = "38px";
            mid_label.style.transition = "all 0.2s ease 0s";
            mid_label.style.fontSize = "38px";
        }
        if (result.innerHTML.length == 15) {
            result.style.transition = "all 0.2s ease 0s";
            result.style.fontSize = "33px";
            mid_label.style.transition = "all 0.2s ease 0s";
            mid_label.style.fontSize = "33px";
        }
    } else {
        if (result.innerHTML.length == 14) {
            result.style.transition = "all 0.2s ease 0s";
            result.style.fontSize = "40px";
            mid_label.style.transition = "all 0.2s ease 0s";
            mid_label.style.fontSize = "40px";
        }
        if (result.innerHTML.length == 16) {
            result.style.transition = "all 0.2s ease 0s";
            result.style.fontSize = "35px";
            mid_label.style.transition = "all 0.2s ease 0s";
            mid_label.style.fontSize = "35px";
        }
    }
}

function myFunction_3(y) {
    if (y.matches) {
        if (result.innerHTML.length == 12) {
            result.style.fontSize = null;
            mid_label.style.fontSize = null;
        }
        if (result.innerHTML.length == 14) {
            result.style.fontSize = "38px";
            mid_label.style.fontSize = "38px";
        }
    } else {
        if (result.innerHTML.length == 13) {
            result.style.fontSize = null;
            mid_label.style.fontSize = null;
        }
        if (result.innerHTML.length == 15) {
            result.style.fontSize = "40px";
            mid_label.style.fontSize = "40px";
        }
    }
}

var y = window.matchMedia("(max-width: 388px)")
y.addListener(myFunction_2)


function defaultStyle() {
    var mid_label = document.getElementById("mid_label");
    mid_label.style.transition = null;
    mid_label.style.top = null;
    mid_label.style.opacity = null;
    mid_label.innerHTML = "";
    var last_result = document.getElementById("last_result");
    last_result.style.transition = null;
    last_result.style.top = null;
    last_result.style.color = null;
    last_result.style.fontSize = null;
    last_result.style.opacity = null;
    var f_result = document.getElementById("f_result");
    f_result.style.opacity = "1";
    myFunction_2(y);
}

function myMove() {
    var result = document.getElementById("result");
    var f_result = document.getElementById("f_result");
    var last_result = document.getElementById("last_result");
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 50) {
            clearInterval(id);
            elem.style.backgroundColor = null;
            elem.style.display = null;
            result.style.transition = null;
            result.style.color = null;
            f_result.style.transition = null;
            f_result.style.color = null;
            last_result.style.transition = null;
            last_result.style.color = null;
            clearResult();
        } else {
            pos++;
            elem.style.transition = "all 0.5s ease 0s";
            elem.style.backgroundColor = "#2cb871";
            result.style.transition = "all 0.5s ease 0s";
            result.style.color = "#2cb871";
            f_result.style.transition = "all 0.5s ease 0s";
            f_result.style.color = "#2cb871";
            last_result.style.transition = "all 0.5s ease 0s";
            last_result.style.color = "#2cb871";
        }
    }
}
