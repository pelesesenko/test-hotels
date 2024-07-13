import {AppDataSource} from '../../data-sorce.js';
import {User, TUserDTO} from './model.js';

const repository = AppDataSource.getRepository(User);

const getUsers = async () => {
  try {
    return await repository.find();
  } catch {
    return null;
  }
};
const getUserById = async (id: number) => {
  try {
    return await repository.findOneByOrFail({id});
  } catch {
    return null;
  }
};
const addUser = async (data: TUserDTO) => {
  try {
    const newUser = repository.create(data);
    return repository.save(newUser);
  } catch {
    return null;
  }
};
const updateUser = async (id: number, data: TUserDTO) => {
  try {
    const result = await repository.update(id, data);
    return result?.affected! > 0 ? repository.findOneBy({id}) : null;
  } catch (err: any) {
    console.log(err.message);
  }
};

const deleteUser = async (id: number) => {
  const result = await repository.delete(id);
  return result?.affected! > 0;
};

export {getUsers, getUserById, addUser, updateUser, deleteUser};
