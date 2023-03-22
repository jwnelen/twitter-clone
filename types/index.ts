export interface User {
  name: string,
  username: string,
  verified: boolean,
}

export interface Tweet {
  id: string;
  text: string;
  user: User;
  minutesAgo: number;
  replies: number;
  retweets: number;
  likes: number;
  reads: number;
}