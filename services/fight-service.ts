import { fetchFights } from '../utils/helper-functions';
import Fight from '../models/fight-model';

export const populateDatabase = async () => {
  const fights = await fetchFights();
    
  try {
    await Fight.deleteMany();
    await Fight.insertMany(fights);
  } catch (err) {
    console.log(err);
  }
};
  
export const getFights = async () => Fight.find({}, { _id: 0, _v: 0 });
