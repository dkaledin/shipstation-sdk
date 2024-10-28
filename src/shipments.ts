import {Shipstation} from './shipstation';
import {
    CreateShipmentLabelParams,
    IGetShipmentRates,
    IShipmentRates,
    Shipment,
    ShipstationResponse,
    VoidShipmentLabelParams,
    VoidShipmentLabelResponse
} from './interfaces';

export class Shipments extends Shipstation {
    public createShipmentLabel(params: CreateShipmentLabelParams): ShipstationResponse<Shipment> {
        return this.makePostRequest<Shipment>('shipments/createlabel', params);
    }

    public voidShipmentLabel(params: VoidShipmentLabelParams): ShipstationResponse<VoidShipmentLabelResponse> {
        return this.makePostRequest<VoidShipmentLabelResponse>('/shipments/voidlabel', params)
    }

    public getShipmentsRates(params: IGetShipmentRates): ShipstationResponse<IShipmentRates> {
        return this.makePostRequest<IShipmentRates>('/shipments/getrates', params)
    }
}
