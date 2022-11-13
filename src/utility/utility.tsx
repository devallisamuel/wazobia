export type Tcard = {
    name: string,
    description : string,
}

export interface Imodals {
    name:string,
    open:boolean,
    note: string,
    setOpen(): void,
} 

export interface Istate {
    user: any,
    items:any[],

}

export interface Iaction {
    type: string,
    payload: any,
}

export interface Isignin {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
} 