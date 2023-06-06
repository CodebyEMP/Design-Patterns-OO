
class homecinemaFcd{

    constructor() {
       
        this.leinwand = new cl_leinwand();
        this.soundsystem = new cl_soundsystem();
        this.popcorn = new cl_popcorn();
        this.beleucht = new cl_beleucht();
    };

    filmSchauen() {
        this.leinwand.leinwandRunter();
        this.soundsystem.soundsystemAn();
        this.popcorn.popcornMaschineAn();
        this.popcorn.popcornMachen();
        this.beleucht.lichtAn();
    };
    

    filmBeenden() {
        this.leinwand.leinwandHoch();
        this.soundsystem.soundsystemAus();
        this.popcorn.popcornmaschineAus();
        this.popcorn.popcornMachen();
        this.beleucht.lichtAus();
    };
    
};
