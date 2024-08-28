export declare type TelemetryErrorRaw = {
    status: "error";
    message: string;
};
export declare type TelemetryQueryRawResponse<T> = {
    data: T[];
    status: "success";
    key_order: string[];
} | TelemetryErrorRaw;
export declare type TelemetryQueryResponse<T> = {
    data: T[];
    status: "success";
    key_order: string[];
};
export declare type TelemetryLogResponse = {
    status: "success";
    message: string;
};
export declare type TelemetryLogRawResponse = TelemetryErrorRaw | TelemetryLogResponse;
