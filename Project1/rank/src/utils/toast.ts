export function toast(text){
    let el = document.createElement('p');
    el.innerText = text;
    el.className = 'toast';
    document.querySelector('#root').appendChild(el);
    let inter = setTimeout(()=>{
        el.parentNode.removeChild(el);
        window.clearTimeout(inter);
    }, 3000);
}