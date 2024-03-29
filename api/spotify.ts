import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
import qs from "qs";
import "dotenv/config";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});
export default spotifyApi;

// export const getToken = async () => {
//   const clientId = process.env.SPOTIFY_CLIENT_ID;
//   const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

//   const headers = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     Authorization: {
//       username: clientId as string,
//       password: clientSecret as string,
//     },
//   };
//   const data = {
//     grant_type: "client_credentials",
//   };

//   try {
//     const response = await axios.post(
//       "https://accounts.spotify.com/api/token",
//       qs.stringify(data),
//       headers
//     );
//     console.log(response.data.access_token);
//     return response.data.access_token;
//   } catch (error) {
//     console.log(error);
//   }
// };

const client_id = "a682c7f90e6e4df89dca075c049e20af";
const client_secret = "785271692095434d89b2fc85ec7df780";
const auth_token = Buffer.from(
  `${client_id}:${client_secret}`,
  "utf-8"
).toString("base64");

export const getAuth = async () => {
  try {
    const token_url = "https://accounts.spotify.com/api/token";
    const data = qs.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

