const objectConverter={
    arrayToMap:(arr)=>new Map(arr.map((item,index) => {return [index, item];})),
    arrayToSet:(arr)=>new Set(arr),
    setToArray:(set)=>Array.from(set),
    mapToArray:(map)=>Array.from(map.values()),
    setToMap:(set)=>new Map(Array.from(set).map((item,index) => {return [index, item];})) ,
    mapToSet:(map)=>new Set(Array.from(map.values()))
}

export default objectConverter;
