function removeDuplicatesFromArray(arra_d) {
    let uniqueEntry = [];
    arra_d.forEach((c) => {
        if (!uniqueEntry.includes(c)) {
            uniqueEntry.push(c);
        }
    })

    return uniqueEntry

}


export default removeDuplicatesFromArray;
