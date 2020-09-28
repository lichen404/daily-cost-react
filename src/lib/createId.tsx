let initial =  parseInt(localStorage.getItem('id')||'0') || 0;
const createId = ()=>{
    initial++
    localStorage.setItem('id',initial.toString())
    return initial
}
export {createId};