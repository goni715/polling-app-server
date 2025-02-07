

export interface IUser {
    fullName: string;
    username: string;
    email: string;
    password: string;
    profileImage?: string | null;
    bookMarkPolls: string[]
}