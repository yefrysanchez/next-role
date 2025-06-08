import slugify from "slugify"

export function getSlug(id: string, title: string): string {
  return `${id}-${slugify(title, { lower: true, strict: true })}`
}
