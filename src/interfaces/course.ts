import { HttpBackend } from "@angular/common/http"

type alphanumeric=number|string;
export interface Course{
    id:string;
    title:string;
    author:string;
    description:string;
    tags:alphanumeric[];
    actualPrice:number;
    discount:number;
    isWishlisted:boolean;
    isRecommended:boolean;
    PriceOrder:number;
    img:string;
    video:string;

}


