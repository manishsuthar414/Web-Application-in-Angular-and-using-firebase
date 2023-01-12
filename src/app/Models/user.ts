export interface ProfileUser {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    phoneNumber: string;
    address: string;
    photoURL: string;
}  
export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    phoneNumber: number;
    // lastName: string;
    // emailVerified: boolean;
 } 