declare class Telemetry {
    private apiKey;
    private baseUrl;
    constructor();
    init(apiKey: string): void;
    log(table: string, data: any): Promise<any>;
    query(query: string): Promise<any>;
}
declare const telemetry: Telemetry;
export default telemetry;
