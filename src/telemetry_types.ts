export type TelemetryErrorRaw = {
  status: "error";
  message: string;
};

export type TelemetryQueryRawResponse<T> = {
  data: T[];
  status: "success";
  key_order: string[];
} | TelemetryErrorRaw;

export type TelemetryQueryResponse<T> = {
  data: T[];
  status: "success";
  key_order: string[];
};

export type TelemetryLogResponse = {
  status: "success";
  message: string;
};

export type TelemetryLogRawResponse = 
TelemetryErrorRaw | TelemetryLogResponse;