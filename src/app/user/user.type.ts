export type User = {
  id: number;
  name: string;
  email: string;
  isPaid: boolean;
  bookStatus: any;
}

export type UserQuery = {
  user: User;
}
