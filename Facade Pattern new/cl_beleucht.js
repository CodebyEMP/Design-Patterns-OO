class cl_beleucht{
    constructor(){

    this._lichtzustand = 1;

    };

    lichtAn(){

        if(this._lichtzustand == 1){
            console.log('Licht bereits eingeschaltet!');
        }
        else{
            console.log('Licht wird eingeschaltet!');
            this._lichtzustand = 1;
        };

    };
    lichtAus(){

        if(this._lichtzustand == 0){
            console.log('Licht bereits ausgeschaltet!');
        }
        else{
            console.log('Licht wird ausgeschaltet!');
            this._lichtzustand = 0;
        };

    };

};








