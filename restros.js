const product =[
    {
        id:0,
        image: 'https://procaffenation.com/wp-content/uploads/2017/09/fast-food.jpg',
        title: 'xyz',
        price:  120,
    },
    {
        id:1,
        image: 'https://www.goodinthesimple.com/wp-content/uploads/2018/10/party-food-photo-682x1024.jpg',
        title: 'abc',
        price:  150,
    },
    {
            id:2,
            image: 'https://assets.londonist.com/uploads/2018/02/i875/fryup_1.jpg',
            title: 'mno',
            price:  700,
    },
    {
        id:3,
        image: 'https://2.bp.blogspot.com/-x60WW-H2cUU/VjhandL-JZI/AAAAAAAAAbU/FYPXK9EcLx0/s1600/italian-pizza%2Bguglielmo.jpg',
        title: 'pqr',
        price:  88,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image,title,price}=item;
        return(
            `<div class='box'
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+ 
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

    var cart=[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart(); 
    }
function delElement(a){
    cart.splice(a,1);
    displaycart();
}


    function displaycart(){
        let j=0, total=0;;
        /*document.getElementById("count").innerHTML = cart.length;*/
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML= "Your cart is empty";  
            document.getElementById("total").innerHTML= "$ "+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price}= items;
                total=total+price;
                document.getElementById("total").innerHTML="$ "+total+".00";
                return(
            
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowing' src=${image}>
                    </div>
                    <p class='font-size:12px;'> ${title} </p>
                    <h2 style='font-size:15px;'>$ ${price}.00 </h2>`  + 
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"   
                       );
            }).join('');
        }
    }