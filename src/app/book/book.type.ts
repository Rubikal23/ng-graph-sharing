export type Book = {
  id: number;
  title: string;
  status: string;
  price: number;
}

export type Query = {
  myBook: Book;
  allBooks: Book[];
}
