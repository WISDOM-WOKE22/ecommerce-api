import { Request, Response } from "express";
import { db } from "../../db";
import { productTable } from "../../db/schemas/productSchema";
import { eq } from "drizzle-orm";

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productTable);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getAProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const [product] = await db
      .select()
      .from(productTable)
      .where(eq(productTable.id, Number(id)));
    if (!product) {
      res.status(404).send({ message: "product not found" });
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const [product] = await db
      .insert(productTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

export async function deleteProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [product] = await db
      .delete(productTable)
      .where(eq(productTable.id, id))
      .returning();
    if (!product) {
      res.status(404).send({ message: "product does not exist" });
    }
    res.status(204).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const updateDetails = req.body;
    const [product] = await db
      .update(productTable)
      .set(updateDetails)
      .where(eq(productTable.id, id))
      .returning();

    if (!product) {
      res.status(404).send({ message: "product not found" });
    }

    res.status(204).send({ message: "product updated successfully", product });
  } catch (error) {
    res.status(500).send(error);
  }
}
