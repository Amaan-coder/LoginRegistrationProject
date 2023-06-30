
export class auth{
       
    static domain: string=" http://localhost:3000";
}


export const GET_ALL_DETAILS = auth.domain + "/user";
export const REGISTRATION = auth.domain + "/user";
export const GET_USER_DATA = auth.domain + "/user";
export const LOGOUT = auth.domain + "/user";
