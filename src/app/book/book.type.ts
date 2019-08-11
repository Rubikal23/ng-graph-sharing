export type BookType = {
  id: number;
  title: string;
  chapters: object[]  ;
  status: string;
}

export type Query = {
  allBooks: BookType[];
}
