import deviceStorage from "./DeviceStorage";

export function saveJWT(token){
    deviceStorage.saveItem('jwt', token);
}

export function getJWT(){
    return deviceStorage.getItem('jwt');
}