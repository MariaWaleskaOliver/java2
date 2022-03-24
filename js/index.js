

function formSubmit()
{
    var errors = '';
    var ProvinceTax = 0;
    var DeliveryTime = 0;
    var subTotal =0;
    var Total=0;
    var tax =0; 
    
    //Check Name input 
    var CostumerName        = document.getElementById('name').value; 
    if (CostumerName == "" || CostumerName == null) 
    {
      errors += 'Please input your Name ! <br>'
      document.getElementById('errorsMsg').innerHTML = errors;
    }
     //Check Email input 
    
    var CostumerEmail       = document.getElementById('email').value;
    if (CostumerEmail == "" || CostumerEmail == null) 
    {
      errors += 'Please input your Email  ! <br>'
      document.getElementById('errorsMsg').innerHTML = errors;
    }
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(CostumerEmail))
    {
     errors += 'Please input a valid email! <br>';
     document.getElementById('errorsMsg').innerHTML = errors;
    }
      //Check Phone input 
    var CostumerNumber      = document.getElementById('phone').value;
    if (CostumerNumber  == "" || CostumerNumber  == null) 
    {
      errors += 'Please input your Phone Number! <br>'
      document.getElementById('errorsMsg').innerHTML = errors;
    }

    var phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/ ;
    if (!phoneRegex.test(CostumerNumber))
    {
     errors += 'Please input a valid phone number in the format 012 345 6789 <br>';
     document.getElementById('errorsMsg').innerHTML = errors;
    }
      //Check Adress input 
    var CostumerAdress      = document.getElementById('address').value;
    if (CostumerAdress  == "" || CostumerAdress   == null) 
    {
      errors += 'Please input your Address! <br>'
      document.getElementById('errorsMsg').innerHTML = errors;
    }

    //Check City  input 
    var ConstumerCity       = document.getElementById('city').value;
    if (ConstumerCity  == "" || ConstumerCity  == null) 
    {
      errors += 'Please input your City! <br>'
      document.getElementById('errorsMsg').innerHTML = errors;
    }
     //Check Post Code input 
     var ConstumerPostCode       = document.getElementById('postCode').value;
     if (ConstumerPostCode == "" || ConstumerPostCode  == null) 
     {
       errors += 'Please input your Post Code! <br>'
       document.getElementById('errorsMsg').innerHTML = errors;
     }
     var postcodeRegex = /^[A-Za-z][0123456789][A-Za-z]\s[0-9][A-Za-z][0-9]$/;
     if(!postcodeRegex.test(ConstumerPostCode))
     {
         errors += 'Postcode should be in the format A2A 2A2 <br>';
         document.getElementById('errorsMsg').innerHTML = errors;
     }
     //Check Post Province input 
   
    var costumerProvince    = document.getElementById ('province').value;

      switch(costumerProvince)
      { 
       case "Ontario":ProvinceTax    =    0.13;
       break;
       case "Manitoba": ProvinceTax  =    0.14;
       break;
       case "Quebec": ProvinceTax    =    0.15;
       break;
    default:
      errors += 'Please Chose your Province! <br>'
      document.getElementById('errorsMsg').innerHTML = errors;
    }

   //Check Products input 
    var Product1           = document.getElementById ('product1').value;
    if (Product1=="")
    {
    
    }
    else{
      
      Product1 = parseInt(Product1);
      if (isNaN(Product1))
      {
          errors += 'You need to input a number! <br>'
          document.getElementById('errorsMsg').innerHTML = errors;
      }

    }
    var Product2            = document.getElementById ('product2').value;
    if (Product2 =="")
    {
    
    }
    else{
      
      Product2  = parseInt(Product2 );
      if (isNaN(Product2 ))
      {
          errors += 'You need to input a number! <br>'
          document.getElementById('errorsMsg').innerHTML = errors;
      }

    }
    var Product3            = document.getElementById ('product3').value;
    if ( Product3 =="")
    {
    
    }
    else{
      
      Product3 = parseInt(Product3);
      if (isNaN(Product3))
      {
          errors += 'You need to input a number! <br>'
          document.getElementById('errorsMsg').innerHTML = errors;
      }
      
    }
     
    if(Product1 == "" && Product2== "" && Product3 == "" )
    {
      errors += 'You need to buy at least one product! <br>'
      document.getElementById('errorsMsg').innerHTML = errors;
    }
  //Set delivery time input 

  var Delivery  = document.getElementById ('delivery').value;
  
  if (Delivery  == "" || Delivery  == null) 
  {
    errors += 'Please input your Delivery Time ! <br>'
    document.getElementById('errorsMsg').innerHTML = errors;
  } 
  else {
  
  switch(Delivery)
   { 
       case "1Days": DeliveryTime = 40;
       break;
       case "2Days": DeliveryTime = 30;
       break;
       case "3Week": DeliveryTime = 20;
       break;
       case "4Week": DeliveryTime = 10;
       break;
    default:
        errors += 'Please choose a Delivery time! <br>'
        document.getElementById('errorsMsg').innerHTML = errors;

    }

   }

 
   if(errors != '') 
    {   
        document.getElementById('errorsMsg').innerHTML = errors;
        document.getElementById('invoice').innerHTML = '';
    } 
    else {
      errors = "";
      document.getElementById('errorsMsg').innerHTML = errors;
 //Calculation

    subTotal = (Product1 * 50 ) +(Product2 * 60)+ (Product3*70);
    tax = subTotal * ProvinceTax;
    Total = subTotal+ProvinceTax + DeliveryTime;         

    
        var myOutput = 'Thank you, and come back soon! <br><br>';

        myOutput += `
                    <b>Name</b>                                 : ${CostumerName}   <br>
                    <b>Email</b>                                : ${CostumerEmail}  <br>
                    <b>Phone</b>                                : ${CostumerNumber} <br>
                    <b>Delivery Address</b>                     : ${CostumerAdress} ,${ConstumerCity}, ${costumerProvince} <br>
                    `
                    if (Product1 != 0){
                      myOutput += `
                    <b> Rubber Mallet</b>  -  Quantity ${Product1} -----  $50.00  each<br>
                      `
                    }
                   if (Product2 != 0){
                      myOutput += `
                      <b>Tape Measure</b>  -  Quantity ${Product2} ----- $60.00  each<br>
                      `
                    }
                    if ( Product3 != 0){

                      myOutput += `
                      <b>Screwdriver</b>  -   Quantity  ${Product3} ---- $70.00 each<br>
                      `

                    }
                    myOutput += `
                    
                    <b>Shipping Charges</b>                     :$ ${DeliveryTime} <br>
                    <b>Sub Total</b>                            :$${subTotal} <br>
                    <b>Tax ${ProvinceTax} <br>
                    -------------------------<br>
                    <b><i>Total Cost                          :$${Total} </i></b> <br>
                    -------------------------
                   
            `;
    
    
        document.getElementById('invoice').innerHTML = myOutput;

    }


    return false;
}

