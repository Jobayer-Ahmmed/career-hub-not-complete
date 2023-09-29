const getId = ()=>{
    const ids = localStorage.getItem("id")
    if(ids){
        const idData = JSON.parse(ids)
        return idData
    }
    return []
}

const setId=(id)=>{
    const getIds = getId()
    const exits = getIds.find(i =>i==id)
    if(!exits){
        getIds.push(id)
        const strIds = JSON.stringify(getIds)
        localStorage.setItem("id", strIds)

    }
}

export {getId, setId}