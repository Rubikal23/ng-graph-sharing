export type Book = {
  id: number;
  title: string;
  status: string;
  price: number;
}

export type BookQuery = {
  myBook: Book;
  books: Book[];
}
