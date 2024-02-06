import { con } from './databaseConnection';
import { WeightChartDataType } from './helperFunctions';

export async function getExercises() {
  const result = await con.query('SELECT * FROM exercises');
  return result[0];
}

export async function getExercise(id: number) {
  let result = await con.query('SELECT * FROM exercises where id=?', [id]);
  return result[0];
}

export async function getNumberOfExercises() {
  let result = await con.query('SELECT COUNT(*) FROM exercises');
  const obj = (result[0] as any)[0];
  const returnNum = obj['COUNT(*)'];
  return returnNum;
}

export async function getWeightsOfUser(userId: string) {
  let result = await con.query(
    'SELECT weight,day from weights where user_id=? order by day asc',
    [userId]
  );
  return result[0] as WeightChartDataType[];
}

export async function getLastWeightOfUser(userId: string) {
  let result = await con.query(
    'select weight from weights where user_id=? order by day desc limit 1',
    [userId]
  );
  return (result[0] as any)[0]['weight'] as number;
}

export async function createExercise(title: string, image?: string) {
  let result = await con.query(
    'INSERT INTO exercises (title, image) VALUES (?, ?)',
    [title, image]
  );
  return getExercise((result[0] as any).insertId);
}
