var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Telemetry {
    constructor() {
        this.apiKey = null;
        this.baseUrl = "https://api.telemetry.sh";
    }
    init(apiKey) {
        this.apiKey = apiKey;
    }
    log(table_1, data_1) {
        return __awaiter(this, arguments, void 0, function* (table, data, options = {}) {
            if (!this.apiKey) {
                throw new Error("API key is not initialized. Please call init() with your API key.");
            }
            const headers = {
                "Content-Type": "application/json",
                Authorization: this.apiKey,
            };
            const body = Object.assign({ data: data, table: table }, options);
            const response = yield fetch(`${this.baseUrl}/log`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            });
            const responseData = yield response.json();
            return responseData;
        });
    }
    query(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, options = {}) {
            if (!this.apiKey) {
                throw new Error("API key is not initialized. Please call init() with your API key.");
            }
            const headers = {
                "Content-Type": "application/json",
                Authorization: this.apiKey,
            };
            const body = Object.assign({ query: query, realtime: true, json: true }, options);
            const response = yield fetch(`${this.baseUrl}/query`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            });
            const responseData = yield response.json();
            return responseData;
        });
    }
}
const telemetry = new Telemetry();
export default telemetry;
