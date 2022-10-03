# Shipstation SDK

### Create Shipment Label

```js
const shipments = new Shipments(
    'your_shipstation_api_key',
    'your_shipstation_api_secret',
    Mode.Mock,
);

shipments.createShipmentLabel({
        carrierCode: 'fedex',
        serviceCode: 'fedex_ground',
        packageCode: 'package',
        confirmation: 'delivery',
        shipDate: '',
        weight: {
            value: 34,
            units: 'ounces',
        },
        shipFrom: {
            name: 'Jason Hodges',
            company: 'ShipStation',
            street1: '2815 Exposition Blvd',
            street2: 'Ste 2353242',
            street3: '',
            city: 'Austin',
            state: 'TX',
            postalCode: '78703',
            country: 'US',
            phone: null,
            residential: null,
        },
        shipTo: {
            name: 'The President',
            company: 'US Govt',
            street1: '1600 Pennsylvania Ave',
            street2: 'Oval Office',
            street3: 'null',
            city: 'Washington',
            state: 'DC',
            postalCode: '20500',
            country: 'US',
            phone: null,
            residential: null,
        },
        testLabel: true,
    })
    .then(response => console.log(response.data));
```

#### Response

```js
{
  shipmentId: 123456789,
  orderId: null,
  userId: null,
  customerEmail: null,
  orderNumber: null,
  createDate: '2016-04-03T12:11:36.8630000',
  shipDate: '2016-04-03',
  shipmentCost: 9.06,
  insuranceCost: 0,
  trackingNumber: '782390443992',
  isReturnLabel: false,
  batchNumber: null,
  carrierCode: 'fedex',
  serviceCode: 'fedex_ground',
  packageCode: 'package',
  confirmation: 'delivery',
  warehouseId: null,
  voided: false,
  voidDate: null,
  marketplaceNotified: false,
  notifyErrorMessage: null,
  shipTo: null,
  weight: null,
  dimensions: null,
  insuranceOptions: null,
  advancedOptions: null,
  shipmentItems: null,
  labelData: 'JVBERi0xLjQKJeLjz9MKMiAwIG9iago8PC9MZW5ndGggNjIvRmlsdGVyL0ZsYXRlRGVjb2RlPj5zdHJlYW0KeJwr5HIK4TI2U...',
  formData: null
}
```

### Void Shipment Label

```js
shipments.voidShipmentLabel({
  shipmentId: 12345
})
.then(response => console.log(response.data));
```

#### Response

```js
{
  approved: true,
  message: 'Label voided successfully'
}
```
