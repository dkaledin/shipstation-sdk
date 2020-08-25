import { Shipstation } from './shipstation';
import { CreateShipmentLabelParams, Shipment, ShipstationResponse, Mode } from './interfaces';

export class Shipments extends Shipstation {
    public createShipmentLabel(params: CreateShipmentLabelParams): ShipstationResponse<Shipment> {
        return this.makePostRequest<Shipment>('shipments/createlabel', params);
    }
}
