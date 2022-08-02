import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const main = async () => {
  const adminUser = await prisma.user.upsert({
    where: {
      email: 'bot-admin@chat.com',
    },
    update: {},
    create: {
      username: 'bot-admin',
      email: 'bot-admin@chat.com',
      password: bcrypt.hashSync('secret42', 10),
      profileImage: 'https://pbs.twimg.com/profile_images/1058706213129474048/0Z-kRgbx_400x400.jpg',
    },
  });

  const adminRoom = await prisma.room.upsert({
    where: {
      code: 'BaGRUPpYRJoZUn30qXbXWXPrmG6Pcc',
    },
    update: {},
    create: {
      userId: 1,
      name: 'admin room',
      code: 'BaGRUPpYRJoZUn30qXbXWXPrmG6Pcc',
    },
  });

  const adminMessage = await prisma.message.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      userId: 1,
      text: `Hi, i'm a bot!`,
      roomCode: 'BaGRUPpYRJoZUn30qXbXWXPrmG6Pcc',
    },
  });

  console.log({ adminUser, adminRoom, adminMessage });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });