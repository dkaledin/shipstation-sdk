import { Shipstation } from './shipstation';
import { CreateShipmentLabelParams, Shipment, ShipstationResponse, VoidShipmentLabelParams, VoidShipmentLabelResponse } from './interfaces';
export declare class Shipments extends Shipstation {
    createShipmentLabel(params: CreateShipmentLabelParams): ShipstationResponse<Shipment>;
    voidShipmentLabel(params: VoidShipmentLabelParams): ShipstationResponse<VoidShipmentLabelResponse>;
}
