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
    log(table, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apiKey) {
                throw new Error("API key is not initialized. Please call init() with your API key.");
            }
            const headers = {
                "Content-Type": "application/json",
                Authorization: this.apiKey,
            };
            const body = {
                data: data,
                table: table,
            };
            const response = yield fetch(`${this.baseUrl}/log`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            });
            const responseData = yield response.json();
            return responseData;
        });
    }
    query(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apiKey) {
                throw new Error("API key is not initialized. Please call init() with your API key.");
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
