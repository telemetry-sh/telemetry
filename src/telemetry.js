class Telemetry {
  constructor() {
    this.apiKey = null;
    this.baseUrl = "https://api.telemetry.sh";
  }

  init(apiKey) {
    this.apiKey = apiKey;
  }

  async log(table, data) {
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

    await fetch(`${this.baseUrl}/log`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
  }

  async query(query) {
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

    const response = await fetch(`${this.baseUrl}/query`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    const responseData = await response.json();
    return responseData;
  }
}

const telemetry = new Telemetry();
export default telemetry;
