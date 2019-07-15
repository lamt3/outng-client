import axios from 'axios';


const ROOT_URL = 'http://localhost:8081/api/v1/profile/auth'

const mock = {
    jwt: 'tokenABC',
    newUser: true
}

export const post_verify_user= () => {
    return{
        type: "FETCH_VERIFY_USER"
    };
};

export const receive_verify_user = (post) => {
    return{
        type: "FETCHED_VERIFY_USER",
        data: post
    };
};

export const error_verify_user = () => {
    return{
        type: "VERIFY_USER_ERROR"
    };
};

export function verifyUserAndGetJWT(provider, userAccessToken){
    const body = {
        "userAccessToken": userAccessToken
    };
    let url = `${ROOT_URL}/authorize/${provider}`;
    // const req = axios.post(url, body);
    console.log('sending mock req')
    return{
        type: 'AUTH_VERIFY_USER',
        payload: mock
    }
}