function customDateFormats(localDate)
{
const returnObj={
    short:"",
    long:""
}
returnObj.short=localDate.toLocaleString("hu-HU",{dateStyle:"medium", timeStyle:"short"}), 
returnObj.long=localDate.toLocaleString("hu-HU",{dateStyle:"long", timeStyle:"medium"})

return returnObj
}



export default customDateFormats;
