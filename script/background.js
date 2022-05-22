// 랜던 배경 이미지 
const bgImg = [
    "https://images.unsplash.com/photo-1651425549735-cdece790c2e1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528",
    "https://images.unsplash.com/photo-1652466439798-fe090b23f18e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632",
    "https://images.unsplash.com/photo-1652905160670-f785bfc21ea6?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472"
    
]
// function backgroundHandler() {
//     const size = parseInt(Math.random() * 10) * 1000;
//     document.body.style.background = `url(http://placekitten.com/2000/${size})`;
// }
function backgroundHandler() {
    const num = parseInt(Math.random() * 3);
    document.body.style.background = `url(${bgImg[num]})`;
}
window.addEventListener('DOMContentLoaded', backgroundHandler);
