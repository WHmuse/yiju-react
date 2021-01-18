
function formatTel(tel){
    tel = tel+'';
    // 12345678900 -> 123****8900
    return tel.slice(0,3)+'****'+tel.slice(7);
}

export {formatTel}