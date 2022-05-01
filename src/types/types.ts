export interface IUser {
  name?: string;
  photo?: string;
}

export interface IProduct {
  name: string;
  image: string;
}

export interface IThank {
  userSender: IUser;
  userReceiver: IUser;
  message: string;
  photo?: string;
  created_at: string
}