import axios from "axios";
import ftConfig from "../utils/config";

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

export async function refreshAccessToken(refreshToken: string) {
  const { data } = await axiosInstance.post(
    "/oauth/token",
    {},
    {
      params: {
        grant_type: "refresh_token",
        client_id: ftConfig.clientId,
        client_secret: ftConfig.clientSecret,
        redirect_uri: ftConfig.redirectUrl,
        refresh_token: refreshToken,
      },
    },
  );

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    accessTokenExpirationDate: new Date(
      Date.now() + data.expires_in * 1000,
    ).toString(),
  };
}
