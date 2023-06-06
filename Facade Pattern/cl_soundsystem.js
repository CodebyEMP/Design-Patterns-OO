class cl_soundsystem{

    constructor(){
    this._soundsystemzustand = 0;
    };

    soundsystemAn(){

        if(this._soundsystemzustand == 1){
            document.write('Soundsystem ist bereits an!');
        }
        else{
            document.write('Soundsystem wird eingeschaltet');
            this._soundsystemzustand = 1;
        };

    };
    soundsystemAus(){

        if(this._soundsystemzustand == 0){
            document.write('Soundsystem ist bereits aus!');
        }
        else{
            document.write('Soundsystem wird ausgeschaltet');
            this._soundsystemzustand = 0;
        };

    };

};
