import React, { useState } from "react";

export interface UserI {
  address: string;
  bio: string;
  city: string;
  coverPic: string;
  createdAt: string;
  email: string;
  followers: string | any;
  following: string | any;
  fullName: string;
  id: number;
  isAdmin: boolean;
  profilePic: string;
  userName: string;
  website: string;
  faceBook: string;
  instagram: string;

  twitter: string;

  linkedIn: string;

  pinterest: string;
}

export interface UserContextI {
  user?: UserI;
  setUser?: (user: UserI) => void;
}

export const UserContext = React.createContext<UserContextI>({
  user: undefined,
});
interface UserContextProviderI {
  children: React.ReactChild;
}
