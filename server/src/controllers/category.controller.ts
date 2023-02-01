import { Request, Response } from "express"
import { CategoryService } from "../services";

const getCategories = (req: Request, res: Response) => {
    return CategoryService.getCategories(req, res);
};

const postCategory = (req: Request, res: Response) => {
    return CategoryService.postCategory(req, res);
}

const deleteCategory = (req: Request, res: Response) => {
    return CategoryService.deleteCategory(req, res);
}

export default { getCategories, postCategory, deleteCategory };