class cl_beleucht{
    constructor(){

    this._lichtzustand = 1;

    };

    lichtAn(){

        if(this._lichtzustand == 1){
            document.write('Licht bereits eingeschaltet!');
        }
        else{
            document.write('Licht wird eingeschaltet!');
            this._lichtzustand = 1;
        };

    };
    lichtAus(){

        if(this._lichtzustand == 0){
            document.write('Licht bereits ausgeschaltet!');
        }
        else{
            document.write('Licht wird ausgeschaltet!');
            this._lichtzustand = 0;
        };

    };

};
