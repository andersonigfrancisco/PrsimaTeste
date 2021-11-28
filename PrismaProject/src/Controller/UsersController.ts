import {Request,Response} from 'express';
import {UsersServices} from '../service/UsersServices'

const createUserService = new UsersServices();

class UsersController
{
  
  async handle(request:Request,response:Response)
  {
    const {name,email} = request.body;
    
    const user = await createUserService.Create({name, email});
    
    return response.json(user);
  }

  async list(request:Request,response:Response)
  {

    const user = await createUserService.list();

    return response.json(user);
  }
}
export {UsersController};