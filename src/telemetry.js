// telemetry.js

class Telemetry {
  constructor() {
    this.apiKey = null;
    this.baseUrl = "https://api.telemetry.sh";
  }

  init(apiKey) {
    this.apiKey = apiKey;
  }

  log(table, data) {
    if (!this.apiKey) {
      throw new Error(
        "API key is not initialized. Please call init() with your API key."
      );
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: this.apiKey,
    };

    const body = {
      data: data,
      table: table,
    };

    fetch(`${this.baseUrl}/log`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  query(query) {
    if (!this.apiKey) {
      throw new Error(
        "API key is not initialized. Please call init() with your API key."
      );
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: this.apiKey,
    };

    const body = {
      query: query,
      realtime: true,
      json: true,
    };

    fetch(`${this.baseUrl}/query`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }
}

const telemetry = new Telemetry();
export default telemetry;
