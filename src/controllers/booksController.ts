import { Request, Response } from "express";
import BookModel, { Book } from "../models/Books";

class BooksController {
    public async index(req: Request, res: Response): Promise<void> {
        const books: Book[] = await BookModel.find().lean()
        console.log(books);
        
        res.render('books/index', { title: 'Books', books })
    }
    public renderFormBook(req: Request, res: Response) {
        res.render('books/add', { title: 'Add a book' })
    }

    public async saveBook(req: Request, res: Response) {
        console.log(req.body);
        const { title, author, isbn } = req.body
        const book: Book = new BookModel({ title, author, isbn })
        await book.save()
        res.redirect('/books')
    }
}

export default new BooksController()