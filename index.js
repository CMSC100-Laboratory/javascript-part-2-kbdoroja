import validator from 'validator'
import { v4 as uuidv4 } from 'uuid';
import { appendFileSync } from 'node:fs';

const generateUID = (fname, lname) => {
    var generated = uuidv4().slice(0,8); 
    var fname = fname.toLowerCase(); 
    var lname = lname.toLowerCase(); 
    var uid = fname.concat(lname); 
    var uid = uid.concat(generated); 

    return uid; 
}

const addAccount = (Array) => {
    if(Array.length == 4){
        if(Array[0] != 0 && Array[1] != 0){
            if(validator.isEmail(Array[2])){
                if(Array[3] >= 18){
                    appendFileSync("user.txt", Array[0]+","+Array[1]+","+Array[2]+","+Array[3]+","+generateUID(Array[0], Array[1])+"\n", "utf-8")
                    
                    return true; 
                }
            }
        }
    }

    return false; 
}

export default {generateUID, addAccount}