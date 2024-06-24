let javascript = 0;
let python = 0;
let java = 0;

javascriptButton = document.querySelector("#javascriptButton");
pythonButton = document.querySelector("#pythonButton");
javaButton = document.querySelector("#javaButton");

javascriptScore = document.querySelector("#javascriptScore");
pythonScore = document.querySelector("#pythonScore")
javaScore = document.querySelector("#javaScore");

javascriptButton.addEventListener("click", () => {
    javascript += 1;
    javascriptScore.innerHTML = `Javascript: ${javascript}`;
})

javaButton.addEventListener("click", () => {
    java += 1;
    javaScore.innerHTML = `Java: ${java}`;
})

pythonButton.addEventListener("click", () => {
    python += 1;
    pythonScore.innerHTML = `Python: ${python}`;
})
