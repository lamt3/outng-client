import { AsyncStorage } from 'react-native';


const deviceStorage = {
   
    async saveItem(key, value){
        try{
            await AsyncStorage.setItem(key, value);   
        }catch(error){
            console.log(error);
        }
        
    },

    async getItem(key){
        try{
            return await AsyncStorage.getItem(key);
        }catch(error){
            console.log(error);
        }

    }
};



export default deviceStorage;
