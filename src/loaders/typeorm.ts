import { createConnection } from 'typeorm';

export default async () => {
  try {
    const connection = await createConnection();
    if (connection) {
      console.log('db connected');
    }
  } catch (err) {
    console.log(err);
  }
};
