import * as config from "./config";

export interface AuthProps {
  email: string;
  name: string;
  uidToken: string;
}

export async function postAuth(data: AuthProps) {
  return fetch(config.AUTH_FIREBASE_PATH, {
    method: "POST",
    body: JSON.stringify(data),

    headers: new Headers({
      Authorization: "Bearer " + config.ACCESS_TOKEN,
      "Content-Type": "application/json",
    }),
  })
    .then((data) => data.json())
    .catch((err) => err);
}
