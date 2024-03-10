export interface Cart {
    numOfCartItems:number,
    data:Data,
}
interface Data {
    totalCartPrice:number,
    products: Products[],
    _id:string,
}
interface Products{
    count: number,
    price: number,
    product: innerProduct,
}
interface innerProduct{
    title: string,
    imageCover: string,
    id:string,
    category: Category,
}

interface  Category{
    name:string;
}

