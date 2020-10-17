const localStorageItemName = "XpensityStatements"
const statementList = {
    cloneStatement(data: Statement | Statement[]){
        return JSON.parse(JSON.stringify(data))
    },
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageItemName)||"[]") as Statement[]

    },
    save(data: Statement | Statement[]){
        return window.localStorage.setItem(localStorageItemName, JSON.stringify(data))
    }
}

export default statementList;