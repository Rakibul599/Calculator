
let str="";
function disp1(s)
{
    let buttonValue = s;
    let inputField = document.getElementById('firstdisp');
    inputField.value = s; 
}
function disp(s)
{
    let buttonValue = s;
    let inputField = document.getElementById('secondisp');
    inputField.setAttribute('data-value', buttonValue);
    str+=buttonValue;
    inputField.value = str;
    
}
function clr()
{
    str="";
    disp(str);
}
function backs()
{
    let l=str.length;
    if(l>0)
    {
        str = str.slice(0, -1);
        let inputField = document.getElementById('secondisp');
        inputField.setAttribute('data-value', str);
        inputField.value = str;
    }

}
function calculation() {
    let len = str.length;
    if (len > 0 && (str[len - 1] === "+" || str[len - 1] === "-" || str[len - 1] === "*" || str[len - 1] === "/")) {
        clr();
        disp("Error");
    } else {
        let ans = parseFloat("0");
        let num = "";
        let operator = "+";
        
        for (let i = 0; i <= len; i++) {
            if (i === len || str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") {
                let currentNum = parseFloat(num);
                switch (operator) {
                    case "+":
                        ans += currentNum;
                        break;
                    case "-":
                        ans -= currentNum;
                        break;
                    case "*":
                        ans *= currentNum;
                        break;
                    case "/":
                        ans /= currentNum;
                        break;
                }
                operator = str[i];
                num = "";
            } else {
                
                num += str[i];
            }
        }
        disp1(str+"="+ans);
        clr();
        disp(ans);
    }
}
function binaray()
{
    let tem = "";
    let frb = ".";
    let number = parseFloat(str);
    let n = Math.floor(number);
    let frak = number - n; 
    let bin = [], c = 0;
    if (n === 0) {
        tem = "0";
    } else {
        while (n !== 0) {
            bin[c++] = n % 2;
            n = Math.floor(n / 2);
        }
        for (let i = c - 1; i >= 0; i--) {
            tem += bin[i];
        }
    }

    if (frak > 0) {
        let coun = 0;
        let maxn = 9;
        while (frak > 0 && coun < maxn) {
            frak *= 2;
            if (frak >= 1) {
                frb += "1";
                frak -= 1;
            } else {
                frb += "0";
            }
            coun++;
        }
    }

    let result = tem;
    if (frb !== ".") {
        result += frb;
    }
    disp1("("+str+")2="+result);
    clr();
    disp(result);
}
function rootn()
{
    let ss=parseFloat(str);
    let an=Math.sqrt(ss);
    disp1("√"+ss+"="+an.toFixed(2));
    clr();
    disp(an.toFixed(2));

}
