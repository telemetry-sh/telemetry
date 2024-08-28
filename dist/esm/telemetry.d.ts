import { TelemetryLogResponse, TelemetryQueryResponse } from "./telemetry_types";
declare class Telemetry {
    private apiKey;
    private baseUrl;
    constructor();
    init(apiKey: string): void;
    log(table: string, data: any, options?: Record<string, any>): Promise<TelemetryLogResponse>;
    query<T>(query: string, options?: Record<string, any>): Promise<TelemetryQueryResponse<T>>;
}
declare const telemetry: Telemetry;
export default telemetry;
