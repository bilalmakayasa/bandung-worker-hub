// this is for MVP only, we hardcoded first, later we will push this to backend
import { ArticleType } from '@/types/articles';

const articles: ArticleType[] = [
    {
        id: 1,
        title: "Pentingnya Menjaga Kesehatan Mental bagi Pekerja Muda",
        slug: "pentingnya-menjaga-kesehatan-mental-bagi-pekerja-muda",
        date: "2023-01-05",
        exceprt: "Pekerja muda adalah kelompok usia produktif yang rentan mengalami masalah kesehatan mental. Untuk mencegahnya, mereka perlu menetapkan waktu batasan dalam bekerja dan jangan ragu menghubungi profesional kesehatan apabila merasakan tanda-tanda masalah mental.",
        contentPath: 'public/data/articles/contents/mental-health-issue-for-youth.mdx',
        author: "Admin",
        imageUrl: "images/depresi.png",
    },
    {
        id: 2,
        title: "Menilik Isu dan Urgensi Kesehatan Mental Pekerja Indonesia",
        slug: "menilik-isu-dan-urgensi-kesehatan-mental-pekerja-indonesia",
        date: "2023-03-05",
        exceprt: "Isu kesehatan mental pekerja patut mendapatkan perhatian khusus, dikarenakan dampak negatif yang dapat ditimbulkan tidak hanya bagi penurunan produktivitas pekerja itu sendiri, tetapi juga dapat memengaruhi perekonomian secara makro.",
        contentPath: 'public/data/articles/contents/menilik-isu-dan-urgensi-kesehatan-mental-pekerja-indonesia.mdx',
        author: "Naufal Mohamad Firdausyan, Ahmad Taqiyuddin, Akmal Shalahuddin, Qisha Quarin",
        imageUrl: "images/depresi.png",
    },
    {
        id: 3,
        title: "Pentingnya Kontrak Kerja Bagi Calon Pekerja Muda",
        slug: "pentingnya-kontrak-kerja-bagi-calon-pekerja-muda",
        date: "2023-04-05",
        exceprt: "Sebagai calon pekerja muda yang baru saja memasuki dunia kerja, memahami dan memperhatikan kontrak kerja adalah langkah penting yang tidak boleh diabaikan. Kontrak kerja bukan sekadar formalitas; dokumen ini memiliki peran besar dalam melindungi hak Anda sebagai pekerja dan memberikan kejelasan mengenai kewajiban Anda kepada perusahaan. Berikut adalah beberapa alasan mengapa kontrak kerja sangat penting untuk Anda pelajari dengan baik.",
        contentPath: 'public/data/articles/contents/pentingnya-kontrak-kerja-bagi-calon-pekerja-muda.mdx',
        author: "Ahmad Budi Santoso",
        imageUrl: "images/depresi.png",
    },
    {
        id: 4,
        title: "Panduan Upah Pekerja di Kota Bandung",
        slug: "panduan-upah-pekerja-di-kota-bandung",
        date: "2023-05-05",
        exceprt: "Sebagai seorang pekerja, memahami sistem penghitungan upah dan hak-hak terkait adalah langkah penting untuk memastikan Anda menerima hak Anda dengan adil. Artikel ini membahas cara penghitungan upah, upah layak di Kota Bandung, hak lembur, hak bekerja di hari libur, dan langkah yang bisa diambil jika terjadi pemotongan upah.",
        contentPath: 'public/data/articles/contents/panduan-upah-pekerja-di-kota-bandung.mdx',
        author: "Ahmad Budi Santoso",
        imageUrl: "images/depresi.png",
    },
    {
        id: 5,
        title: "Kebebasan Berserikat dan Pentingnya Berserikat bagi Pekerja",
        slug: "kebebasan-berserikat-dan-pentingnya-berserikat-bagi-pekerja",
        date: "2023-06-05",
        exceprt: "Berserikat merupakan hak fundamental bagi setiap pekerja yang diakui baik secara nasional maupun internasional. Dalam konteks ketenagakerjaan, berserikat adalah bentuk kemewahan yang tidak selalu mudah diwujudkan. Serikat pekerja memberikan wadah bagi pekerja untuk menyuarakan aspirasi, memperjuangkan hak, dan melindungi kepentingan mereka secara kolektif.",
        contentPath: 'public/data/articles/contents/kebebasan-berserikat-dan-pentingnya-berserikat-bagi-pekerja.mdx',
        author: "Ahmad Budi Santoso",
        imageUrl: "images/depresi.png",
    }
] 

export default articles;