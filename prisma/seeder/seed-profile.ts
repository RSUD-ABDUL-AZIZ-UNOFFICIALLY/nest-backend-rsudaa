import { PrismaClient } from "@prisma/client";

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

    return { profile, socmed }
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