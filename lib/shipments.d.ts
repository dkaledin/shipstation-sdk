import { Shipstation } from './shipstation';
import { CreateShipmentLabelParams, Shipment } from './interfaces';
import { AxiosResponse } from 'axios';
export declare class Shipments extends Shipstation {
    createShipmentLabel(params: CreateShipmentLabelParams): Promise<AxiosResponse<Shipment>>;
}
