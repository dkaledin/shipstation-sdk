import axios from 'axios';
import { Mode, ShipstationResponse } from "./interfaces";

export abstract class Shipstation {
    constructor(
        protected readonly apiKey: string,
        protected readonly apiSecret: string,
        protected readonly mode: Mode,
    ) { }

    protected makePostRequest<R>(endPoint: string, body: any): ShipstationResponse<R> {
        const baseUrl = this.getBaseUrl();
        const url = `${baseUrl}${endPoint}`;
        const authHeader = this.getAuthHeader();

        return axios.post<R>(
            url,
            body,
            {
                headers: {
                    ...authHeader,
                    'Content-Type': 'application/json',
                },
            },
        );
    }

    private getBaseUrl(): string {
        if (this.mode === Mode.Production) {
            return 'https://ssapi.shipstation.com/';
        } else if (this.mode === Mode.Debug) {
            return 'https://private-anon-f3907bd0ce-shipstation.apiary-proxy.com/';
        }

        return 'https://private-anon-f3907bd0ce-shipstation.apiary-mock.com/';
    }

    private getAuthHeader() {
        const data = `${this.apiKey}:${this.apiSecret}`;

        const bufferSize = Buffer.byteLength(data);
        const buffer = Buffer.alloc(bufferSize, data);
        const authToken = buffer.toString('base64');

        return {
            Authorization: `Basic ${authToken}`,
        };
    }
}
