import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient()

async function main() {
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
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
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
                name: 'loker',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
            },
            {
                name: 'magang',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed orci dignissim, sodales sapien quis, tincidunt est. Phasellus nunc tellus, sollicitudin lobortis nunc ut, tempus feugiat diam. Fusce eu nibh a massa ullamcorper dictum. Donec in accumsan turpis, eu consequat nibh. Maecenas vitae enim ac ipsum cursus imperdiet quis id risus. Nam vestibulum arcu cursus ipsum gravida condimentum. Sed non magna rhoncus purus mattis feugiat. Nullam nunc ipsum, vestibulum sit amet est sed, vehicula euismod elit. Fusce auctor enim ligula, nec convallis ante consequat et. Mauris nec arcu sagittis, luctus nunc eu, sodales ante.',
                images: null,
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
    const loker = await prisma.loker.createMany({
        data: [
            {
                id: randomUUID(),
                name: 'Programmer',
                desc: 'Dibutuhkan segera posisi Programmer di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.'
            },
            {
                id: randomUUID(),
                name: 'IT Support',
                desc: 'Dibutuhkan segera posisi IT Support di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.'
            },
            {
                id: randomUUID(),
                name: 'Content Creator',
                desc: 'Dibutuhkan segera posisi Content Creator di RSUS dr Abdul Aziz Kota Singkawang,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo ut felis nec tincidunt. Phasellus sed auctor massa. Mauris mattis ultrices quam, ac ultricies ipsum vehicula id. Ut ac consectetur lorem, a feugiat nulla. Fusce vitae nunc id est elementum dapibus ut a urna. Quisque accumsan lorem urna, eu viverra est varius eget. Morbi id urna tempor, rhoncus mi et, egestas ante. Mauris auctor eget felis ut posuere. Pellentesque ultricies volutpat urna, eget ornare lacus euismod et. Sed porta congue lorem, non dapibus lorem malesuada non. Ut a aliquam dui. Etiam sit amet eleifend purus. Suspendisse sem orci, rhoncus fringilla est vitae, egestas auctor velit. Maecenas commodo ultricies sem, congue lobortis lacus scelerisque sed.'
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

    return { profile, socmed, loker, activity, announcement }
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