let result = document.getElementById("result");
let expression = document.getElementById("expression");
let buttons = document.getElementsByClassName("calculator");

for(let i=0;i<buttons.length;i++) {
    buttons[i].addEventListener('click', function () {
        switch (this.id) {
            case "C":
                expression.innerText = '';
                result.innerText = '';
                break;
            case "⌫":
                expression.innerText = expression.innerText.slice(0, -1);
                break;
            case "=":
                try {
                    result.innerText = expression.innerText == "" ? "" : eval(expression.innerText);
                } catch (err) {
                    result.innerText = "ERORR";
                }
                break;
            case "+":
            case "-":
            case "/":
            case "*":
            case "(":
            case ")":
            case ".":
                operator = ["+", "-", "*", "/", ".", "(", ")"];
                for(let i=0; i<operator.length; i++){
                    if(expression.innerText[(expression.innerText).length-1] == operator[i] ){
                        expression.innerText = expression.innerText.slice(0, -1);
                    }
                }
                expression.innerText += this.innerText;
                break;
            default:
                expression.innerText += this.innerText;
        }
    });
}


