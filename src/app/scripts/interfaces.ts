import _ from "lodash";
declare global {
    interface Window {
        [key: string]: any;
    }
    interface Navigator {
        camera: any
        notification: any
        device: any
        splashscreen: any
    }
    var device, cordova, Media, StatusBar, Camera, CameraPopoverOptions, CameraPopoverHandle;
    var _: _;
}
// Appery.io models
export interface $aio_empty_object {};
//
export interface UserModel {
    "email": string,
    "gender": string,
    "job": string,
    "lastName": string,
    "photo": string,
    "firstName": string,
    "address": string,
    "dateOfBirth": string,
    "phone": string
}
//
interface __EventResponse_sub_002 {
    "time": string,
    "date": string,
    "names": string
}
interface __EventResponse_sub_001 extends Array < __EventResponse_sub_002 > {}
export interface EventResponse {
    "events": __EventResponse_sub_001
}
//
export interface FileReadServiceResponse {
    "data": any
}