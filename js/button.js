const button = document.getElementById("btn")

let preValue = button.innerText;
let postValue = parseInt(preValue);

const handleClick = () => {
    postValue = postValue + 1;

    button.innerText = postValue;
}