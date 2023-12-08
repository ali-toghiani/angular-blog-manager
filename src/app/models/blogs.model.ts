export interface BlogsListModel {
  data: BlogsModel[];
}

export interface BlogsModel{
  id: number
  title: string
  image_url: string
  main_text: string
  date: string
  author_name: string
  author_avatar_url: string
  comments: BlogCommentModel[]
}

export interface BlogCommentModel {
  name: string
  message: string
  date: string
  avatar_url: string
}
