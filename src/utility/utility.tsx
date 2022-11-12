export type Tcard = {
    name: string;
    description : string;
}

export interface Imodals {
    name:string,
    open:boolean
    note: string,
    setOpen(): void
} 