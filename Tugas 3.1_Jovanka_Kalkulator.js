const tambah=(...index)=>{    
    let results = index[0]+index[1];
    return results;
}
const kurang=(...index)=>{
    let results = index[0]-index[1];
    return results;
}
const kali=(...index)=>{
    let results = index[0]*index[1];
    return results;
}
const bagi=(...index)=>{
    let results = index[0]/index[1];
    return results;
}
const modulus=(...index)=>{
    let results = index[0]%index[1];
    return results;
}

const tambahBT = document.getElementById("tambah");
tambahBT.addEventListener("click", function(){
    let angka1= parseInt(document.getElementById("angka1").value);
    let angka2= parseInt(document.getElementById("angka2").value);
    let results = tambah(angka1,angka2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
});
const kurangBT = document.getElementById("kurang");
kurangBT.addEventListener("click", function(){
    let angka1= parseInt(document.getElementById("angka1").value);
    let angka2= parseInt(document.getElementById("angka2").value);
    let results = kurang(angka1,angka2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
});
const kaliBT = document.getElementById("kali");
kaliBT.addEventListener("click", function(){
    let angka1= parseInt(document.getElementById("angka1").value);
    let angka2= parseInt(document.getElementById("angka2").value);
    let results = kali(angka1,angka2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
    
});
const bagiBT = document.getElementById("bagi");
bagiBT.addEventListener("click", function(){
    let angka1= parseInt(document.getElementById("angka1").value);
    let angka2= parseInt(document.getElementById("angka2").value);
    let results = bagi(angka1,angka2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
});
const modulusBT = document.getElementById("modulus");
modulusBT.addEventListener("click", function(){
    let angka1= parseInt(document.getElementById("angka1").value);
    let angka2= parseInt(document.getElementById("angka2").value);
    let results = modulus(angka1,angka2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",results);
    console.log(results);
});
const clearBT = document.getElementById("clear");
clearBT.addEventListener("click", function(){
    document.getElementById("angka1").value="";
    document.getElementById("angka2").value="";
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value"," ");
});