class cl_leinwand{

    constructor(){

    this._leinwandzustand = 0;
    }

    leinwandRunter(){

        if(this._leinwandzustand == 1){
            console.log('Leinwand ist bereits runtergefahren!');
        }
        else{
            console.log('Leinwand wird runtergefahren');
            this._leinwandzustand = 1;
        };

    };
    leinwandHoch(){

        if(this._leinwandzustand == 0){
            console.log('Leinwand ist bereits hochgefahren!');
        }
        else{
            console.log('Leinwand wird hochgefahren');
            this._leinwandzustand = 0;
        };

    };
    
};
