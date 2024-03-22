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
        ],
        skipDuplicates: true,
    })

    console.log({ profile })
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