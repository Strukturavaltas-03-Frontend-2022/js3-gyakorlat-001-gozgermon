let HU={
    date:(Date)=>new Intl.DateTimeFormat('hu-HU').format(Date),
    currency:(number)=>new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(number),
    list:(arr)=>new Intl.ListFormat('hu', { style: 'long', type: 'conjunction' }).format(arr)
}

export default HU;
