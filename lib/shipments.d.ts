import { Shipstation } from './shipstation';
import { CreateShipmentLabelParams, Shipment, ShipstationResponse } from './interfaces';
export declare class Shipments extends Shipstation {
    createShipmentLabel(params: CreateShipmentLabelParams): ShipstationResponse<Shipment>;
}
