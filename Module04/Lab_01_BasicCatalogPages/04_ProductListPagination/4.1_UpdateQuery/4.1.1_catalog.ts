export type PagedCategory = Category & {
  page: {
    before: string | null,
    after: string | null,
  }
}