import axios from "axios";

const client = axios.create({
  baseURL: "https://was-react-hackathon-fall-2019.firebaseio.com/",
  headers: { "Content-Type": "application/json" }
});

class API {
  buildPath(url: string): string {
    return `${url}.json`;
  }

  get(url: string, params: object = {}) {
    return client({ method: "get", url: this.buildPath(url), params });
  }

  post(url: string, data: object, params: object = {}) {
    return client({ method: "post", url, data, params });
  }

  put(url: string, data: object, params: object = {}) {
    return client({ method: "put", url, data, params });
  }

  patch(url: string, data: object, params: object = {}) {
    return client({ method: "patch", url, data, params });
  }

  delete(url: string) {
    return client({ method: "delete", url });
  }
}

export default new API();
