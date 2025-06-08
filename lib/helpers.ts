export function genarateUrl(id: string, title: string): string {
  return id + title
    .toLowerCase();
}
