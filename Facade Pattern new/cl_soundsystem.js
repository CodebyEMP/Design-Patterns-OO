class cl_soundsystem{

    constructor(){
    this._soundsystemzustand = 0;
    };

    soundsystemAn(){

        if(this._soundsystemzustand == 1){
            console.log('Soundsystem ist bereits an!');
        }
        else{
            console.log('Soundsystem wird eingeschaltet');
            this._soundsystemzustand = 1;
        };

    };
    soundsystemAus(){

        if(this._soundsystemzustand == 0){
            console.log('Soundsystem ist bereits aus!');
        }
        else{
            console.log('Soundsystem wird ausgeschaltet');
            this._soundsystemzustand = 0;
        };

    };

};
