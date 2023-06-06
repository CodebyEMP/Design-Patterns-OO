class cl_leinwand{

    constructor(){

    this._leinwandzustand = 0;
    }

    leinwandRunter(){

        if(this._leinwandzustand == 1){
            document.write('Leinwand ist bereits runtergefahren!');
        }
        else{
            document.write('Leinwand wird runtergefahren');
            this._leinwandzustand = 1;
        };

    };
    leinwandHoch(){

        if(this._leinwandzustand == 0){
            document.write('Leinwand ist bereits hochgefahren!');
        }
        else{
            document.write('Leinwand wird hochgefahren');
            this._leinwandzustand = 0;
        };

    };
    
};
