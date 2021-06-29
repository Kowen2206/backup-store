const useStorage = () => {
  
const SetSessionStorage = payload =>{
    const {key, value} = payload;
    window.sessionStorage.setItem(key, value.stringify())
}

const GetSessionStorage = payload =>{
    
    if(window.sessionStorage.getItem(payload)){
        const value = JSON.parse(window.sessionStorage.getItem(payload));
        return value
    // eslint-disable-next-line no-else-return
    }else{
        return false
    }
}

const SetLocalStorage = payload =>{
    const {key, value} = payload;
    window.localStorage.setItem(key, value.stringify())
}

const GetLocalStorage = payload =>{
    if(window.localStorage.getItem(payload)){
        const value = JSON.parse(window.sessionStorage.getItem(payload));
        return value
    // eslint-disable-next-line no-else-return
    }else{
        return ""
    }
}

return{
    SetLocalStorage,
    GetLocalStorage,
    SetSessionStorage,
    GetSessionStorage
}

}

export default useStorage;
