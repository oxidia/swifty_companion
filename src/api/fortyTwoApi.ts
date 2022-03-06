import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.intra.42.fr",
});

export async function findUserByLogin(login: string, accessToken: string) {
  const { data } = await axiosInstance.get(`/v2/users/${login}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}
