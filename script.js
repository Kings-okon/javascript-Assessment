const allBtns = document.querySelectorAll(".btn");
const clockwise = document.querySelector('.clockwise')
var arr = [1, 2, 3, 6, 9, 8, 7, 4];

const updateDom = (val) => {
    val.forEach((arr, index) => {
        document.querySelector(`.index-${index + 1}`).textContent = arr
    })
}

const reverse = () => {
    arr = [...arr.slice(1), arr[0]];
    updateDom(arr);
}

clockwise.addEventListener('click', () => {
    arr.unshift(arr.pop())
    updateDom(arr);
});
allBtns.forEach(btn => btn.addEventListener("click", () => reverse()))
