export interface Product {
    imageCover: string;
    title: string;
    Category: Category,
    price: string;
    ratingsAverage : string;
    id:string;
}

interface Category{
    name:string;
}