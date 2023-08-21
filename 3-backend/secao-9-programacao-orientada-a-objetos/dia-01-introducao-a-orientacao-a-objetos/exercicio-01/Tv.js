var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    Tv.prototype.turnOn = function () {
        console.log("TV ".concat(this.brand, ", ").concat(this.size, "\", resolution: ").concat(this.resolution, " \n      available connections: ").concat(this.connections));
    };
    return Tv;
}());
var tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);
tv1.turnOn();
