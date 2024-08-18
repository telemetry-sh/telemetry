class Telemetry {
  private apiKey: string | null;
  private baseUrl: string;

  constructor() {
    this.apiKey = null;
    this.baseUrl = "https://api.telemetry.sh";
  }

  init(apiKey: string): void {
    this.apiKey = apiKey;
  }

  async log(
    table: string,
    data: any,
    options: Record<string, any> = {}
  ): Promise<any> {
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
      ...options,
    };

    const response = await fetch(`${this.baseUrl}/log`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const responseData = await response.json();
    return responseData;
  }

  async query(query: string, options: Record<string, any> = {}): Promise<any> {
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
      ...options,
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
