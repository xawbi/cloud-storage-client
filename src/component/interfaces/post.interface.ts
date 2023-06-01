export interface IPost {
  id: number
  email: string
  password: string
  fullName: string
  createAt: string
  updateAt: string
}

export interface IGetPosts {
  posts: IPost
}

export interface IGetPost {
  post: IPost
}