import { Shipstation } from './shipstation';
import { CreateShipmentLabelParams, Shipment, Mode } from './interfaces';
import { AxiosResponse } from 'axios';

export class Shipments extends Shipstation {
    public createShipmentLabel(params: CreateShipmentLabelParams): Promise<AxiosResponse<Shipment>> {
        return this.makePostRequest<Shipment>('shipments/createlabel', params);
    }
}
