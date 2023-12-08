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
}
