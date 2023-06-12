import { GeneroModel } from "./genero.model";

export interface MoviesModel{
    id:number,
    title:string,
    descripcion:string
    poster:string
    genero:GeneroModel
}

export interface CreateMovieDto extends Omit<MoviesModel, 'id' | 'genero'>{
    generoId:number;
}

export interface UpdateMovieDto extends Partial<MoviesModel>{
    generoId?:number
}