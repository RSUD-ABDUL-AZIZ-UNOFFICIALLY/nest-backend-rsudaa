import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.createMany({
        data: [
            {
                fullName: 'Amirull Azmi',
                no_wa: '08994627432',
                password: '12345'
            },
            {
                fullName: 'Hamida',
                no_wa: '0895600393063',
                password: '12345'
            },
            {
                fullName: 'Devian Balado',
                no_wa: '089656885638',
                password: '12345'
            },
        ]
    })

    const profile = await prisma.profile.createMany({
        data: [
            {
                name: 'visi',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'misi',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'about-us',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'history',
                desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32',
                images: null,
            },
            {
                name: 'images-rsaa',
                desc: '',
                images: null,
            },
            {
                name: 'struktur-organisasi',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'struktur-organisasi-image',
                desc: 'https://blog-cdn.kitalulus.com/blog/wp-content/uploads/2024/02/26172231/65d57982bfa1b95ed19da4bb_struktur-organisasi-perusahaan-kecil-scaled.jpg',
                images: null,
            },
            {
                name: 'struktur-manajemen',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'maklumat-pelayanan',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'profile-direktur',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'activity',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },

            {
                name: 'article',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'loker',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'magang',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'pendaftaranOnline',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'pendaftaranOnlineLink',
                desc: 'https://online.rsudaa.singkawangkota.go.id/',
                images: null,
            },
            {
                name: 'skm',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'skmLink',
                desc: 'https://rsudaa.singkawangkota.go.id/survei/',
                images: null,
            },
            {
                name: 'skmImage',
                desc: '',
                images: null,
            },
            {
                name: 'nameDirektur',
                desc: 'Dr Alexandre',
            },
            {
                name: 'nameDirektur',
                desc: 'Dr Alexandre',
            },
            {
                name: 'signDirektur',
                desc: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Tanda_Tangan_Mick_Schumacher.png',
            },
            {
                name: 'nameDirektur',
                desc: 'Dr Alexandre',
            },
            {
                name: 'signDirektur',
                desc: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Tanda_Tangan_Mick_Schumacher.png',
            },
            {
                name: 'layananInformasi',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
            },
            {
                name: 'layananInformasi-image',
                desc: 'https://www.infopublik.id/assets/upload/headline//20180511111300.jpg',
            },
        ],
        skipDuplicates: true,
    })

    const socmed = await prisma.socmed.createMany({
        data: [
            {
                name: 'facebook',
                link: 'https://www.facebook.com/rsudaa/?locale=id_ID'
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com/rsuddr.abdulaziz/'
            },
            {
                name: 'twitter',
                link: 'https://x.com'
            },
            {
                name: 'email',
                link: 'https://google.com'
            },
        ],
        skipDuplicates: true,
    })

    const aplikasi = await prisma.linkAplikasi.createMany({
        data: [
            {
                id: randomUUID(),
                name: 'WBS',
                link: 'https://wbs.singkawangkota.go.id/#/'
            },
            {
                id: randomUUID(),
                name: 'SP4N LAPOR',
                link: 'https://www.lapor.go.id/'
            },
            {
                id: randomUUID(),
                name: 'SIPPN',
                link: 'https://sippn.menpan.go.id/instansi/154940/pemerintah-kota-singkawang/rsud-dr-abdul-aziz'
            },
        ],
        skipDuplicates: true,
    })

    const dasarHukum = await prisma.dasarHukum.createMany({
        data: [
            {
                id: randomUUID(),
                name: 'Undang - Undang',
            },
            {
                id: randomUUID(),
                name: 'Peraturan Pemerintah',
            },
            {
                id: randomUUID(),
                name: 'Peraturan Daerah',
            },
            {
                id: randomUUID(),
                name: 'SK Standar Pelayanan Publik',
            },
        ],
        skipDuplicates: true,
    })

    const laporanTahunan = await prisma.laporanTahunan.createMany({
        data: [
            {
                name: 'perjankin',
            },
            {
                name: 'renaksi',
            },
            {
                name: 'renja',
            },
            {
                name: 'ikt',
            },
            {
                name: 'hasil survei',
            },
            {
                name: 'hasil ikm',
            },
        ],
        skipDuplicates: true,
    })
    const loker = await prisma.loker.createMany({
        data: [
            {
                id: randomUUID(),
                name: 'Programmer',
                desc: 'Dibutuhkan segera posisi Programmer di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.',
                dateStart: '2024-05-07',
                dateEnd: '2024-05-10',
            },
            {
                id: randomUUID(),
                name: 'IT Support',
                desc: 'Dibutuhkan segera posisi IT Support di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.',
                dateStart: '2024-05-07',
                dateEnd: '2024-05-10',
            },
            {
                id: randomUUID(),
                name: 'Content Creator',
                desc: 'Dibutuhkan segera posisi Content Creator di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.',
                dateStart: '2024-05-07',
                dateEnd: '2024-05-10',
            },
        ],
        skipDuplicates: true,
    })

    const magang = await prisma.magang.createMany({
        data: [
            {
                id: randomUUID(),
                name: 'Programmer Intern',
                desc: 'Dibutuhkan segera posisi Programmer di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.',
                dateStart: '2024-05-07',
                dateEnd: '2024-05-10',
            },
            {
                id: randomUUID(),
                name: 'IT Support Intern',
                desc: 'Dibutuhkan segera posisi IT Support di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.',
                dateStart: '2024-05-07',
                dateEnd: '2024-05-10',
            },
            {
                id: randomUUID(),
                name: 'Content Creator Intern',
                desc: 'Dibutuhkan segera posisi Content Creator di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.',
                dateStart: '2024-05-07',
                dateEnd: '2024-05-10',
            },
        ],
        skipDuplicates: true,
    })

    const activity = await prisma.activity.createMany({
        data: [
            {
                activityID: randomUUID(),
                title: 'Aktivitas 1',
                desc: 'Dibutuhkan segera posisi Programmer di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.',
            },
            {
                activityID: randomUUID(),
                title: 'Aktivitas 2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut'
            },
            {
                activityID: randomUUID(),
                title: 'Aktivitas 3',
                desc: 'Lorem ipsum dolor sit amet,  a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor ',
            },
            {
                activityID: randomUUID(),
                title: 'Aktivitas today',
                desc: 'Lorem ipsum dolor sit amet,  a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor ',
            },
            {
                activityID: randomUUID(),
                title: 'Aktivitas kemarin',
                desc: 'Lorem ipsum dolor sit amet,  a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor ',
            },
        ],
        skipDuplicates: true,
    })
    const article = await prisma.article.createMany({
        data: [
            {
                articleID: randomUUID(),
                title: 'Artikel 1',
                desc: 'Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.',
            },
            {
                articleID: randomUUID(),
                title: 'Artikel 2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut'
            },
            {
                articleID: randomUUID(),
                title: 'Artikel 3',
                desc: 'Lorem ipsum dolor sit amet,  a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor ',
            },
            {
                articleID: randomUUID(),
                title: 'Artikel kesehatan',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut'
            },
            {
                articleID: randomUUID(),
                title: 'Artikel manajemen',
                desc: 'Lorem ipsum dolor sit amet,  a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor ',
            },
            {
                articleID: randomUUID(),
                title: 'Artikel gizi',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut'
            },
            {
                articleID: randomUUID(),
                title: 'Artikel poliklinik',
                desc: 'Lorem ipsum dolor sit amet,  a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor ',
            },
        ],
        skipDuplicates: true,
    })

    const announcement = await prisma.announcement.createMany({
        data: [
            {
                announcementID: randomUUID(),
                title: 'Pengumuman Jadwal Poli',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna.',
            },
            {
                announcementID: randomUUID(),
                title: 'Pengumuman BPJS',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna.',
            },
            {
                announcementID: randomUUID(),
                title: 'Pengumuman Pendaftaran Loket',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna.',
            },
            {
                announcementID: randomUUID(),
                title: 'Pengumuman Pelayanan',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna.',
            },
            {
                announcementID: randomUUID(),
                title: 'Pengumuman Pelayanan 2024',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna.',
            },
        ],
        skipDuplicates: true,
    })



    return { profile, socmed, loker, magang, activity, announcement, article, laporanTahunan, aplikasi, dasarHukum, user }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })