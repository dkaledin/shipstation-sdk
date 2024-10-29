import { Shipstation } from './shipstation';
import { CreateShipmentLabelParams, IGetShipmentRates, IShipmentRates, Shipment, ShipstationResponse, VoidShipmentLabelParams, VoidShipmentLabelResponse } from './interfaces';
export declare class Shipments extends Shipstation {
    createShipmentLabel(params: CreateShipmentLabelParams): ShipstationResponse<Shipment>;
    voidShipmentLabel(params: VoidShipmentLabelParams): ShipstationResponse<VoidShipmentLabelResponse>;
    getShipmentsRates(params: IGetShipmentRates): ShipstationResponse<IShipmentRates[]>;
}
