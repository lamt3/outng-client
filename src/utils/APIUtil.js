import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {getJWT} from './TokenUtil';

//create config and change host by env 
const host = 'localhost';
const port = '5010';
const apiURL = `http://${host}:${port}`;



export const getMatchesRequest = async (url, requestParams, options) => {
  const token = await getJWT();
  const optionsWithHeaders = token
    ? {
        ...options,
        headers: {
          ...options.headers,
          'X-AUTH-TOKEN': token,
        },
      }
    : options;

  const getRequest = requestParams ? apiURL + url + '?' + requestParams : apiURL + url 
  console.log(getRequest)


  return axios.get(getRequest, optionsWithHeaders);
};

export const postMatchesRequest =  async  (url, params, options) => {
    const token = await getJWT();
    const optionsWithHeaders = token ? {
                    ...options,
                    headers: {
                    ...options.headers,
                    'X-AUTH-TOKEN': token,
                },
            }
            : options;
    return axios.post(apiURL + url, params, optionsWithHeaders);
  };

