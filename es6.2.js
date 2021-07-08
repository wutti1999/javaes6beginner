//spraed oparator การกระจายค่า จาก array

// array + array
let fruit=['มะม่วง','เเตงกวา']
console.log(fruit);

let Food=["กะเพรา","หมูกะเทียม"]
console.log(Food )

let Allin=[...fruit,...Food]
console.log(Allin); 


// array+object
let product={name:"mango",price:400}
console.log(product);
let Newproduct={...product,category:"ผลไม้"}
console.log(Newproduct);
let newprice={...Newproduct,price:1200}
console.log(newprice);