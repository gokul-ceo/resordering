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
 
    // if (Name!==null){
    //     return true
        
    // }else{
    //     return false
    // }

// export function save_user_details(Name,phno){
//     const customerid = Date.now()
//     localStorage.setItem('Customerid',customerid)
   
//     // localStorage.setItem('Customer-id',customerid)

// }
export function save_sockid(id){
    localStorage.setItem("Id",id)
}

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
    console.log("Strorage is available!");
}else{
    console.log("No storage for us!!");
}


export function getitemstatus(){
    var resultlist = []
    fetch('http://localhost:4000/availablemenuitems',{
        method:"GET"
    })
    .then((response)=>response.json())
    .then((data)=>{
        return data
    })
    // console.log("REsult list: ",resultlist);
    
}