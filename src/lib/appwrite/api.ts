// Import ID
import { ID } from 'appwrite'

// Import NewUser
import { INewUser } from "../types";

// Import Account
import { account } from './config';

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name,
    )
    return newAccount
  } catch (error) {
    console.log(error);
    return error
  }
}