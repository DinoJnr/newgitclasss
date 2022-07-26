 const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

let allCustomer =[];
function signUp(){
    if(fir.value=="" && sec.value=="" && ema.value=="" && pass.value=="" ){
        alert("Pls Fill In This Form")
        return
    }
        let customersData = JSON.parse(localStorage.getItem('allCustomers'));
        let newCustomer= {};
        newCustomer.FirstName = fir.value;
        newCustomer.LastName = sec.value;
        newCustomer.Email = ema.value;
        newCustomer.Password = pass.value;
        if (!customersData) {
            
            allCustomer.push(newCustomer);
            localStorage.setItem("allCustomers", JSON.stringify(allCustomer));
        } else {
            customersData.push(newCustomer);
            localStorage.setItem("allCustomers", JSON.stringify(customersData));
        }
        show = "Dear" + " " + fir.value + " " + sec.value + ","+" "+ "with Email" + ema.value + " " + "Your Registeration Was Successful, Proceed To The Sign In Page To login In."  ;
        alert(show);
    //     var retrivedStudent =JSON.parse(localStorage.getItem("localAllStudents"))




   
//    if(fir.value ==FirstName && sec.value == LastName && ema.value == Email && pass.value==Password ){}
   
};
function displayCustomer(){
    ballon.style.display = "none";
    smions.style.display ="block";
    for (let i = 0; i < allCustomer.length; i++) {
        Smions.innerHTML +="<h1>User"+ eval(i+1)+"</h1>";
        Smions.innerHTML +="FIRSTNAME:"+" " +allCustomer[i].FirstName ;
        Smions.innerHTML +="LASTNAME:"+" "+ allCustomer[i].LastName;
        smions.innerHTML +="E-MAIl: "+" " + allCustomer[i].Email 
        smions.innerHTML +="PASSWORD "+" "+ allCustomer[i].Password ;
    }
}

var food = JSON.parse(localStorage.allCustomers)
function signIn(){
    for (var i = 0; i < food.length; i++){
        if(Email.value==food[i].Email && Pincode.value==food[i].Password){
            alert("Login Successful");
            stand.style.display = "none";
            mainpage.style.display = "block"
            return
        }
        else if(Email.value==""&& Pincode.value==""){

            alert("Pls fill the form");
            return


        }
        else if(Email.value!=food[i].Email && Pincode.value!=food[i].Password){
            alert("Wrong Detail");
            return
        }    
    }
    };

function adminPortal(){
    stand.style.display = "none";
    fun.style.display = "block";

};
let loginT = {
    adminPassId : "0091144431",
    adminPassCode : "1918",

};

function adminLogin(){
    if(passcod.value==+loginT.adminPassId && placecard.value==+loginT.adminPassCode){
        ballon.style.display = "block";
        fun.style.display = "none";
        alert("Login Successful");
       return 
    } 
    else if(passcod.value=="" && placecard.value==""){
        alert("Fill in the form")

    }
    else if(passcod.value != loginT.adminPassId && placecard.value != loginT.adminPassCode){
        alert("Wrong details")

    }
};
function addProduct(){
    ballon.style.display ="none";
    wawa.style.display = "block";
};
function cartButton(){
    mainpage.style.display = "none";
    caartpage.style.display = "block";
};
function cartBack(){
    mainpage.style.display = "block";
    caartpage.style.display = "none";
};

let add_to_cart_btns = document.getElementsByClassName("btn-primary")
let main_container = document.getElementsByTagName("tbody")[0]
let quantity_fields = document.getElementsByClassName("num")
let removeBtns = document.getElementsByClassName("uk-button-danger")




for (let i = 0; i < add_to_cart_btns.length; i++) {
    add_to_cart_btns[i].addEventListener("click", addToCart)
}
function addToCart(event){
   let btn = event.target
   let btn_parent = btn.parentElement
   let btn_grandparent = btn.parentElement.parentElement
   let itemName = btn_parent.children[0].innerText
   let itemPrice = btn_parent.children[1].innerText
   let itemImage =btn_grandparent.children[0].src

   let itemContainer = document.createElement("tr")
   itemContainer.innerHTML =`<td> <input class="uk-checkbox" type="checkbox"> </td>
   <td> <img style="border-radius:100%; width: 40px; height: 40px; margin-top:20px;" class="uk-preserve-width uk-border-circle" src="${itemImage}" alt=""></td>
   <td class="uk-table-link">
       <h3 style="width:100px;color:rgb(0, 132, 255);position:relative; top:50px; font-size:10px;left:-55px" class="item-name">${itemName}</h3>
   </td>
   <td style="color:rgb(0, 132, 255); position:relative; top:0px; font-size:10px; left:-19%;" class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
   <td style="color:rgb(0, 132, 255); position: relative;left: -7%;top:0px;"> <input style="outline: none;border: none;background-color: wheat;width: 50px;height: 15px;color:rgb(0, 132, 255);" type="number" class="num" value="1"></td>
   <td style="position: relative;left: 0%;top:0px; color:rgb(0, 132, 255);font-size:10px;" class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
   <td style="position:relative; left:2%;top:0px;"> <img src="Img/delete.jfif" style="width:30px; height:30px; border-radius:100%; "  role="button" class="uk-button uk-button-danger" alt="" srcset=""></td>`

   main_container.append(itemContainer)


   for (let i = 0; i < quantity_fields.length; i++) {
    quantity_fields[i].addEventListener("change", updateTotal)
}
for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", removeItem)

};
    grandTotal()
}
function updateTotal(event){
    number_of_items = event.target
    number_of_items_parent = number_of_items.parentElement.parentElement
    price_field = number_of_items_parent.getElementsByClassName("item-price")[0]
    total_field = number_of_items_parent.getElementsByClassName("total-price")[0]
    price_field_content = price_field.children[0].innerText.replace("$",'')
    total_field.children[0].innerText = "$"+ number_of_items.value * price_field_content
    // console.log(price_field_content)

    if(isNaN(number_of_items.value)|| number_of_items.value <= 0){
        number_of_items.value = 1
    }
    grandTotal()
}
function grandTotal(){
    let total = 0
    let grand_total = document.getElementsByClassName("grand-total")[0]
    let total_price = document.getElementsByClassName("total-price")
    for (let i = 0; i < total_price.length; i++) {
        total_price_content = Number(total_price[i].innerText.replace("$", ""))
        total += total_price_content
    }
    grand_total.children[0].innerText = "$" + total
    grand_total.children[0].style="font-size:20px;position:relative;left:-90px;color:rgb(0, 132, 255); top:140px;"
    // console.log(total)
}
function removeItem(event){
    remove_btn = event.target
    remove_btn_grandparent = remove_btn.parentElement.parentElement
    remove_btn_grandparent.remove()
    grandTotal()
}