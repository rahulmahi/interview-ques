
//sum of given number

let x;
            
  let sum = 0;

  x = 6545;  //5+4+5+6 = 20

  while(x > 0)
  {
    lastDigit = x % 10; 

    sum = sum + lastDigit;

    //x = x - lastDigit;

   // x =Math.floor(x / 10); 
   x = (x-lastDigit)/10;
  }
  console.log("The sum is:",sum);
