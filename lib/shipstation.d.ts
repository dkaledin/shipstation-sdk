import { Mode } from "./interfaces";
export declare abstract class Shipstation {
    protected readonly apiKey: string;
    protected readonly apiSecret: string;
    protected readonly mode: Mode;
    constructor(apiKey: string, apiSecret: string, mode: Mode);
    protected makePostRequest<R>(endPoint: string, body: any): Promise<import("axios").AxiosResponse<R>>;
    private getBaseUrl;
    private getAuthHeader;
}
