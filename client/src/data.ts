const img =
  "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600";

export interface PostI {
  id?: number;
  desc?: string;
  photo?: string;
  date?: string;
  userId?: number;
  like?: number;
  comment?: number;
}

export const stories = [
  {
    id: 1,
    name: "Mizan",
    img: "https://images.unsplash.com/photo-1589095181425-c038b3871b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwbG92ZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 2,
    name: "Sobuz",
    img: "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 3,
    name: "Rezvee",
    img: "https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: 4,
    name: "Hridoy",
    img: "https://images.unsplash.com/photo-1586082207282-3dcb61d25ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9zZSUyMGZsb3dlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: 5,
    name: "Rana",
    img: "https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
  },
  // {
  //   id: 6,
  //   name: "Ismail",
  //   img: "https://www.bhg.com/thmb/hB_a-tLu1q2Wndl-Jcs7cBwKzGg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/premixed-bouquet-flower-0e49a64c-d56684fed4a94f0b9bcee6f83b70c040.jpg",
  // },
  // {
  //   id: 7,
  //   name: "Manik",
  //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkPE9Pap3wxFnrI_Wki3Pg2fkRmWob0mtvw&usqp=CAU",
  // },
  // {
  //   id: 8,
  //   name: "Babu",
  //   img: "https://images.unsplash.com/photo-1552409905-46aa1e84e2e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
  // },
  // {
  //   id: 9,
  //   name: "Opu",
  //   img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/surprising-flower-meanings-bleeding-hearts-1650767905.jpg",
  // },
];

export interface UserI {
  id: number;
  profilePicture: string;
  username: string;
}
export const Users = [
  {
    id: 1,
    profilePicture: "assets/person/1.jpeg",
    username: "Safak Kocaoglu",
  },
  {
    id: 2,
    profilePicture: "assets/person/2.jpeg",
    username: "Janell Shrum",
  },
  {
    id: 3,
    profilePicture: "assets/person/3.jpeg",
    username: "Alex Durden",
  },
  {
    id: 4,
    profilePicture: "assets/person/4.jpeg",
    username: "Dora Hawks",
  },
  {
    id: 5,
    profilePicture: "assets/person/5.jpeg",
    username: "Thomas Holden",
  },
  {
    id: 6,
    profilePicture: "assets/person/6.jpeg",
    username: "Shirley Beauchamp",
  },
  {
    id: 7,
    profilePicture: "assets/person/7.jpeg",
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture: "assets/person/8.jpeg",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "assets/person/9.jpeg",
    username: "Gary Duty",
  },
  {
    id: 10,
    profilePicture: "assets/person/10.jpeg",
    username: "Safak Kocaoglu",
  },
];

export const Posts: PostI[] = [
  {
    id: 1,
    desc: "Love For All, Hatred For None.",
    photo: "assets/post/1.jpeg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: "assets/post/2.jpeg",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Every moment is a fresh beginning.",
    photo: "assets/post/3.jpeg",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: "assets/post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: "assets/post/5.jpeg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: "assets/post/6.jpeg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Never regret anything that made you smile.",
    photo: "assets/post/7.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: "assets/post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Change the world by being yourself.",
    photo: "assets/post/9.jpeg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: "assets/post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
