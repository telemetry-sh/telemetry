declare class Telemetry {
    private apiKey;
    private baseUrl;
    constructor();
    init(apiKey: string): void;
    log(table: string, data: any, options?: Record<string, any>): Promise<any>;
    query(query: string, options?: Record<string, any>): Promise<any>;
}
declare const telemetry: Telemetry;
export default telemetry;
