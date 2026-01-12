import type {IModules} from "./IModules.ts";

export interface ICourse {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: IModules;
}