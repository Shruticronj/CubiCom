import axios from "axios";
export default class ShipmentDetails {
  static GetShipmentDetails() {
    let axiosInstance = axios.create({
      baseURL: "https://api.jsonbin.io/b/5ed48a2460775a568585eacf/3",
      timeout: 10000,
    });

    axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.accept = "application/json";
        return config;
      },
      (error) => Promise.reject(error)
    );

    return axiosInstance({
      // url: baseURL,
      method: "GET",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).catch((err) => err);
  }
}

// export default class ShipmentDetails {
//   static GetShipmentDetails() {
//     return fetch("./data.json")
//       .then((resp) => resp.json())
//       .then((data) => {
//         return data;
//       })
//       .catch((err) => err);
//   }
// }

// export default class ShipmentDetails {
//   static GetShipmentDetails() {
//     return fetch("https://api.jsonbin.io/b/5ed48a2460775a568585eacf", {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         return json;
//       })
//       .catch((err) => err);
//   }
// }
