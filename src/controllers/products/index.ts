import { Request, Response } from "express"

export function getAllProducts (req: Request, res: Response) {
    res.send("All from all products");
};

export function getAProduct (req: Request, res: Response) {
    res.send("A product")
};

export function createProduct (req: Request, res: Response){
    res.send("product created successfully")
};

export function deleteProduct (req: Request, res: Response){
    res.send("Product deleted successfully")
}