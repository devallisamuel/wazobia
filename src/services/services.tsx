import axios from "axios";
import { Isignin } from "utility/utility";

export const verifyToken = async (param: string) => {
  try {
    let url = `${process.env.REACT_APP_BASE_URL}/me/verify`;
    const { data } = await axios.post(
      url,
      { token: param }
    );

    console.log(data.message);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signUpUser = async (payload:Isignin) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/me`;

        const {data} = await axios.post(url,payload);
        return data;

    } catch (error) {
        console.log(error);
    }

};

export function parseUser (param:any) {
        return JSON.parse(param);
} 


export async function login (payload:{[key:string]:string}) {
    try {        
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/tokens`, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function createItem(payload: { [key: string]: string }) {
    try {
           const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/items`, payload);
           return data;
    } catch (error) {
        console.log(error);
    }
}
