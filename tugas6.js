let angka = 20
let total = ''
for(let i=1;  i<=angka; i++){
    if(i%2==0){
        total+='genap'
        total += ','
    }else{
        total+=i
        total+=','
    }
}console.log(total)