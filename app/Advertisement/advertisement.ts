export class Advertisement {
    id: string;
    adName: string;
    adDesc: string;
    price: number;
    discountPrice: number;
    beaconid: string;
    advertisementCount: number;
    imgUrl: string;
    expiryDate: string;

    constructor(id: string, adName: string, adDesc: string, 
            price: number, discountPrice: number, beaconid: string, 
            advertisementCount: number, imgUrl: string, expiryDate: string) {
        this.id = id;
        this.adName = adName;
        this.adDesc = adDesc;
        this.price = price;
        this.discountPrice = discountPrice;
        this.beaconid = beaconid;
        this.advertisementCount = advertisementCount;
        this.imgUrl = imgUrl;
        this.expiryDate = expiryDate;
    }
}