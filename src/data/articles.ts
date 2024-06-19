export interface ArticleType {
  id: number;
  bannerUrl: string;
  title: string;
  description: string;
  dateAdded: Date;
  slug: string;
}

export const articles: ArticleType[] = [
  {
    id: 1,
    bannerUrl: "/blog-photo.webp",
    title: "Lorem ipsum dolor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    dateAdded: new Date(),
    slug: "blog-details-1",
  },
  {
    id: 2,
    bannerUrl: "/blog-photo.webp",
    title: "Lorem ipsum dolor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    dateAdded: new Date(),
    slug: "blog-details-2",
  },
  {
    id: 3,
    bannerUrl: "/blog-photo.webp",
    title: "Lorem ipsum dolor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    dateAdded: new Date(),
    slug: "blog-details-3",
  },
  {
    id: 4,
    bannerUrl: "/blog-photo.webp",
    title: "Lorem ipsum dolor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    dateAdded: new Date(),
    slug: "blog-details-4",
  },
];
