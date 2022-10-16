import socket from "./socket"
// function Client_side_Worker(){
// export function Turnofmodel(){
//     const dispatch = useDispatch()
//     dispatch(informpageloaded())
// }
export function check_user_details(){
    const Name = localStorage.getItem('UserName')
    if (Name===null){
        return false
    }else{
        return true
    }
}
export function load_user_details(){

    const Name = localStorage.getItem('UserName')
    const Phone = localStorage.getItem('Phone')
    console.log("Name from localstorage: ",Name);
    console.log("Phonenumber from localstorage: ",Phone);
    // if (Name!==null){
    //     return true
        
    // }else{
    //     return false
    // }
}
export function save_user_details(Name,phno){
    localStorage.setItem('UserName',Name)
    localStorage.setItem('Phone',phno)

}
window.onload=(event) =>{
    socket.emit("loadevent","loaded successfully!!")
    console.log("load_user_details:",load_user_details());
    // Getuserdetails()
    // const dispatch = useDispatch();

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
if(storageAvailable('localStorage')){
    // localStorage.clear()
    
    load_user_details()
}else{
    console.log("No storage for us!!");
}
}