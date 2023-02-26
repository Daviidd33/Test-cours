const btn = document.getElementById("btn");

let counter = 0
const addP = () => {
    counter++
    const sect = document.getElementById("container")
    const p = document.createElement("p")
    const text = (counter % 3 === 0) ? "hello" : "new paragraphe"
    const textP = document.createTextNode(text)
    p.appendChild(textP)
    sect.appendChild(p)
}
btn.addEventListener("click", addP);
