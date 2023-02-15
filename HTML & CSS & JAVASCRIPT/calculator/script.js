let panel = document.getElementById("panel");

let buttons = Array.from(document.getElementsByClassName("button"));

console.log(buttons)

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerHTML){
            case 'C':
                panel.innerHTML = " ";
                break;
            case '<i class="fa-solid fa-delete-left icon"></i>':
                panel.innerHTML = panel.innerHTML.slice(0, -1);
                break;
            case '=':
                try{
                    panel.innerHTML = eval(panel.innerHTML);
                    break;
                } catch {
                    panel.innerHTML = "Error!"
                    break;
                }       
            default:
                panel.innerHTML += e.target.innerHTML
        }
    })
})