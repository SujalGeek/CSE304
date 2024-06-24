let javascript = 0;
let python = 0;
let java = 0;

javascriptButton = document.querySelector("#javascriptButton");
pythonButton = document.querySelector("#pythonButton");
javaButton = document.querySelector("#javaButton");
clearButton = document.querySelector("#clearButton");

javascriptScore = document.querySelector("#javascriptScore");
pythonScore = document.querySelector("#pythonScore")
javaScore = document.querySelector("#javaScore");

javascriptButton.addEventListener("click", () => {
    if (localStorage.javascript) {
        localStorage.javascript = Number(localStorage.javascript)+1;
      } else {
        localStorage.javascript = 1;
      }
    javascriptScore.innerHTML = `Javascript: ${localStorage.javascript}`;
})

javaButton.addEventListener("click", () => {
    if (localStorage.java) {
        localStorage.java = Number(localStorage.java)+1;
      } else {
        localStorage.java = 1;
      }
    javaScore.innerHTML = `Java: ${localStorage.java}`;
})

pythonButton.addEventListener("click", () => {
    if (localStorage.python) {
        localStorage.python = Number(localStorage.python)+1;
      } else {
        localStorage.python = 1;
      }
    pythonScore.innerHTML = `Python: ${localStorage.python}`;
})

clearButton.addEventListener("click", () => {
    javascript = 0;
    python = 0;
    java = 0;

    javaScore.innerHTML = `Java: ${java}`;
    javascriptScore.innerHTML = `Javascript: ${javascript}`;
    pythonScore.innerHTML = `Python: ${python}`;

})

if (localStorage.javascript) {
    localStorage.javascript = Number(localStorage.javascript)+1;
  } else {
    localStorage.javascript = 1;
  }


document.getElementById("body").onload(() => {
    javaScore.innerHTML = `Java: ${localStorage.java}`;
    javascriptScore.innerHTML = `Javascript: ${localStorage.javascript}`;
    pythonScore.innerHTML = `Python: $localStorage.{python}`;
})

function myFunction() {
    if(localStorage.java)
        {
            javaScore.innerHTML = `Java: 0`;
        }
        else{
            javaScore.innerHTML = `Java: ${localStorage.java}`;
        }
        if(localStorage.javascript)
            {
                javascriptScore.innerHTML = `Javascript: 0`;
            }
            else{
                javascriptScore.innerHTML = `Javascript: ${localStorage.javascript}`;
            }
            if(localStorage.python)
                {
                    pythonScore.innerHTML = `python: 0`;
                }
                else{
                    pythonScore.innerHTML = `python: ${localStorage.python}`;
                }
  }