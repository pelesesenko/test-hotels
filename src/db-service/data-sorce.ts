import {DataSource} from 'typeorm';
import config from './../config.js';
import {User} from './entities/user/model.js';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: config.DB_PATH!,
  entities: [User],
  synchronize: true,
});

const initDataSource = () => {
  return AppDataSource.initialize();
};

initDataSource()
  .then(() => {
    console.log('Data Source connected');
  })
  .catch((err) => {
    console.log('Error Data Source connection: ', err.message);
  });
