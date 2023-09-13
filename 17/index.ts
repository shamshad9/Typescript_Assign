let  guestList =["zia","Ali","Zakir","Zafar","Nisar","Naeem"];
console.log("intial array",guestList)
"remove guest from the list until  only two name remain"
 let  popReturn=guestList.pop();
 popReturn=guestList.pop();
 popReturn=guestList.pop();
 popReturn=guestList.pop();
 console.log("pop is returing:",popReturn,`zafar,Nisar,Naeem`,"i can't invite you for dinner");
 console.log("after",guestList,"I can invite only two people for dinner");
 guestList . splice(0,2);
 console.log("after splice", guestList);

