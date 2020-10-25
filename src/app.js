var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(number,color){
    if(number>0){
        for(let i=0;i<=number;i++){
            chocolates.unshift(color);
        }    
    }
}


//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(number,chocolates){
     
    if(number>0){
        for(let i=0;i<=number;i++){
            var a = chocolates.slice(0,number);
        }    
    }
    return a;
}


//Progression 3: Dispense ___ chocolates
function dispenseChocolates(number,chocolates){
    if(number>0){
        for(let i=0;i<=number;i++){
            var a= [];
            a = chocolates.shift();
        }    
    }
    return a;
}


//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    var count =0;
if(number>0{
    for(let i=0;i<chocolates.length();i++){
        if(chocolates[i]==color){
            count++;
        }
        if(count<= number){
            var a= [];
            a.push(chocolates[i]);
            return a;
        } 
    }
})
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){
    var g=0,s=0,b=0,c=0,p=0,re=0,pi=0;
    var a = [];
for(let i=0;i<chocolates.length();i++){
switch(chocolates){
    case "green":
        g++;
        break;
    case "silver":
        s++;
        break;
    case "blue":
        b++;
        break;
    case "crimson":
        c++;
        break;
    case "purple":
        p++;
        break;
    case "red":
        re++;
        break;
    case "pink":
        pi++;
        break;                        
}
return a = a.push(g,s,b,c,p,re,pi);
}
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors



//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor){
for(let i=0;i<chocolates.length();i++){

}
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
for(let i=0;i<chocolates.length();i++){
    var res = chocolates.replace(color,finalColor);
return res;
}
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
