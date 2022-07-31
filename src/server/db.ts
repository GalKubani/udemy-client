import Axios from 'axios';
import { courseType, userDataType } from '../utils/types';
//
const DB_URL = `http://localhost:4040`;
// export const subscribeToSite = async (email, password, name) => {
//   try {
//     const res = await Axios.post(DB_URL + `/users/add`, {
//       email,
//       password,
//     });
//     return res.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };
export const loginToDB = async (
  email: string,
  password: string,
): Promise<userDataType> => {
  try {
    const res = await Axios.post(DB_URL + '/users/login', {
      email,
      password,
    });
    return res.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const getAllCourses = async (): Promise<courseType[]> => {
  try {
    const res = await Axios.get(DB_URL + '/courses/get-all');
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
// export const editPersonalData = async (updatedData, token) => {
//   try {
//     const res = await Axios.patch(DB_URL + '/users/me', updatedData, {
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     });
//     return res.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };
// export const addNewAdvert = async (formData, token) => {
//   try {
//     const res = await Axios.post(DB_URL + '/courses/new', formData, {
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     });
//     return res.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };
// export const findUserAdverts = async token => {
//   try {
//     const res = await Axios.get(DB_URL + '/courses/get-user', {
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     });
//     return res.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };
