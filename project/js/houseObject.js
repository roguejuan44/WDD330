class houseObject {
    constructor(property_id, address, configuration, list_price, image, description, taxes) {
        this.property_id = property_id;
        this.address = address;
        this.configuration = configuration;
        this.list_price = list_price;
        this.image = image;
        this.description = description;
        this.taxes = taxes;
    }

    getId() {return this.property_id;}    
    setId(x) {this.property_id = x;} 

    getAddress() {return this.address;}    
    setAddress(x) {this.address = x;} 

    getAddress() {return this.address;}    
    setAddress(x) {this.address = x;} 

    getPrice() {return this.list_price;}    
    setPrice(x) {this.list_price = x;} 

    getImage() {return this.image;}    
    setImage(x) {this.image = x;} 

    getDescription() {return this.description;}    
    setDescription(x) {this.description = x;} 
    
    getTaxes() {return this.taxes;}    
    setTaxes(x) {this.taxes = x;} 
}