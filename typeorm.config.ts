import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'rutas1234',
    database: 'db_rutas',
    synchronize: false,
    entities: ['src/**/*.entity.ts'],
    migrations: ['.src/migrations/*.ts'],
});