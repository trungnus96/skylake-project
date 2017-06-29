export class Beacon {
    id: string;
    beaconName: string;
    storeName: string;
    beaconLocation: string;
    beaconCount: number;

    constructor(id: string, beaconName: string, storeName: string, beaconLocation: string, beaconCount: number) {
        this.id = id;
        this.beaconName = beaconName;
        this.storeName = storeName;
        this.beaconLocation = beaconLocation;
        this.beaconCount = beaconCount;
    }
}