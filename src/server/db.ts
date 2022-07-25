import Axios from 'axios';
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
// export const loginToDB = async (email, password) => {
//   try {
//     const res = await Axios.post(DB_URL + '/users/login', {
//       email,
//       password,
//     });
//     return res.data;
//   } catch (err) {
//     throw new Error(err);
//   }
// };
export const getAllAdverts = async () => {
  try {
    const res = await Axios.get(DB_URL + '/courses/get-all');
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
