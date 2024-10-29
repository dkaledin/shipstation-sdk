import { AxiosResponse } from 'axios';

export interface CreateShipmentLabelParams {
    carrierCode: string;
    serviceCode: string;
    packageCode: string;
    confirmation?: string;
    shipDate: string;
    weight: WeightModel;
    dimensions?: DimensionsModel;
    shipFrom: AddressModel;
    shipTo: AddressModel;
    insuranceOptions?: any;
    internationalOptions?: InternationalOptionsModel;
    advancedOptions?: AdvancedOptionsModel;
    testLabel?: boolean;
}

export interface Shipment {
    shipmentId: number;
    orderId: string;
    userId: string;
    customerEmail: string;
    orderNumber: string;
    createDate: string;
    shipDate: string;
    shipmentCost: number;
    insuranceCost: number;
    trackingNumber: string;
    isReturnLabel: boolean;
    batchNumber: string;
    carrierCode: string;
    serviceCode: string;
    packageCode: string;
    confirmation: string;
    warehouseId: string;
    voided: boolean;
    voidDate: string;
    marketplaceNotified: boolean;
    notifyErrorMessage: string;
    shipTo: AddressModel,
    weight: WeightModel,
    dimensions: DimensionsModel,
    insuranceOptions: any;
    advancedOptions: AdvancedOptionsModel;
    shipmentItems: any;
    labelData: string;
    formData: string;
}

export interface VoidShipmentLabelParams {
    shipmentId: number;
}

export interface VoidShipmentLabelResponse {
    approved: boolean;
    message: string
}

export interface IGetShipmentRates {
    carrierCode: string,
    fromPostalCode: string,
    toCountry: string,
    toPostalCode: string,
    weight: {
        value: number,
        units: string
    }
}

export interface IShipmentRates {
    serviceName: string,
    serviceCode: string,
    shipmentCost: number,
    otherCost: number
}

export interface InternationalOptionsModel {
    contents: 'merchandise' | 'documents' | 'gift' | 'returned_goods' | 'sample';
    customsItems: CustomsItemModel[];
    nonDelivery?: 'return_to_sender' | 'treat_as_abandoned';
}

export interface CustomsItemModel {
    readonly customsItemId: string;
    description: string;
    quantity: number;
    value: number;
    harmonizedTariffCode: string;
    countryOfOrigin: string;
}

export interface AddressModel {
    name: string;
    company: string;
    street1: string;
    street2?: string;
    street3?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
    residential?: boolean;
}

export interface AdvancedOptionsModel {
    warehouseId?: number;
    nonMachinable?: boolean;
    saturdayDelivery?: boolean;
    containsAlcohol?: boolean;
    storeId?: number;
    customField1?: string;
    customField2?: string;
    customField3?: string;
    source?: string;
    mergedOrSplit?: boolean;
    mergedIds?: number;
    parentId?: number;
    billToParty?: string;
    billToAccount?: string;
    billToPostalCode?: string;
    billToCountryCode?: string;
    billToMyOtherAccount?: string;
}

export interface WeightModel {
    value: number;
    units: 'pounds' | 'ounces' | 'grams';
}

export interface DimensionsModel {
    units: 'inches' | 'centimeters';
    length: number;
    width: number;
    height: number;
}

export enum Mode {
    Mock = 'Mock',
    Debug = 'Debug',
    Production = 'Production',
}

export type ShipstationResponse<T> = Promise<AxiosResponse<T>>;
