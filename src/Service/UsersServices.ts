
import { hash } from "bcryptjs";
import { PrismaClient } from '@prisma/client';

interface IUserRequest {
  name: string;
  email: string;
}

const prisma = new PrismaClient();


class UsersServices {

  async Create({ name, email}: IUserRequest) {

    if (!email)
      throw new Error("Email incorrect")

    const UserAlreadyExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })

    if(UserAlreadyExists)
      throw new Error("User already exists")
    
    //const passwordhash = await hash(password,8);

    const User = await prisma.user.create({
      data: {
        name: name,
        email: email,
        posts: {
          create: { title: 'Hello World' },
        },
        profile: {
          create: { bio: 'I like turtles' },
        },
      },
    })
    if(!User)
    {
      await prisma.$disconnect();
      throw new Error("add error")
    }  
    return User;
  }
  
  async list() {
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })

    return !allUsers ? new Error("User user does not exists") : allUsers;
  }
}
export { UsersServices }