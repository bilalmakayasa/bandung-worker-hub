export type ArticleType = {
    id: number;
    title: string;
    slug: string;
    date: string;
    exceprt: string;
    contentPath: string;
    author: string;
    imageUrl: string;
}

export type RoundedImageCardProps = {
    title: string;
    exceprt: string;
    imageUrl: string;
    slug: string;
}
