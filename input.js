function Tienlai(){
    let  a = document.getElementById("a").value
    a = Number (a)
    let b = document.getElementById("b").value
    b= Number (b)
    let c= 3.45
    let TienLai= a+b*c
    alert (TienLai) 
    document.getElementById("TienLai").innerText= TienLai
}