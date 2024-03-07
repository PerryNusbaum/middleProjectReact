export const fromShekelToDollar=(sum,dollar,currencyInSite)=>{
    if(currencyInSite=="ILS")
        return sum/dollar;
    return sum;
    // return 100;
}
export const fromDollarToShekel=(sum,dollar)=>{
    return sum*dollar;
    
}
export const convert=(sum,dollar,currencyInSite)=>{
    if(currencyInSite=="ILS")
    return sum;
return sum/dollar
}