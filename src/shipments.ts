import { Shipstation } from './shipstation';
import {
    CreateShipmentLabelParams,
    Shipment,
    ShipstationResponse,
    VoidShipmentLabelParams, VoidShipmentLabelResponse
} from './interfaces';

export class Shipments extends Shipstation {
    public createShipmentLabel(params: CreateShipmentLabelParams): ShipstationResponse<Shipment> {
        return this.makePostRequest<Shipment>('shipments/createlabel', params);
    }

    public voidShipmentLabel(params: VoidShipmentLabelParams): ShipstationResponse<VoidShipmentLabelResponse> {
        return this.makePostRequest<VoidShipmentLabelResponse>('/shipments/voidlabel', params)
    }
}
