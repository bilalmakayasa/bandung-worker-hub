// this is for MVP only, we hardcoded first, later we will push this to backend
import { ArticleType } from '@/types/articles';

const articles: ArticleType[] = [
    {
        id: 1,
        title: "Pentingnya Menjaga Kesehatan Mental bagi Pekerja Muda",
        slug: "pentingnya-menjaga-kesehatan-mental-bagi-pekerja-muda",
        date: "2021-09-01",
        exceprt: "Pekerja muda adalah kelompok usia produktif yang rentan mengalami masalah kesehatan mental. Untuk mencegahnya, mereka perlu menetapkan waktu batasan dalam bekerja dan jangan ragu menghubungi profesional kesehatan apabila merasakan tanda-tanda masalah mental.",
        contentPath: 'src/data/articles/contents/mental-health-issue-for-youth.mdx',
        author: "Admin",
        imageUrl: "images/depresi.png",
    },
] 

export default articles;