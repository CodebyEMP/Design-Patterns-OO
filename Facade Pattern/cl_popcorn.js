class cl_popcorn{

    constructor(){

    this._popcornmaschinenzustand = 0;

    }

    popcornMachen(){

       if(this._popcornmaschinenzustand == 0){
        document.write('Popcornaschine ist aus und sollte angeschaltet werden, um Popcorn herzustellen!');
       } 
       else{
        document.write('Popcorn wird hergestellt!');
       };
       
    };
    popcornMaschineAn(){

       if(this._popcornmaschinenzustand == 1){
        document.write('Popcornmaschine ist bereits an!');
       }
       else{
        document.write('Popcornmaschine wird eingeschaltet');
        this._popcornmaschinenzustand = 1;
       };

    };
    popcornMaschineAus(){

        if(this._popcornmaschinenzustand == 0){
            document.write('Popcornmaschine ist bereits aus!');
        }
        else{
            document.write('Popcornmaschine wird ausgeschaltet');
            this._popcornmaschinenzustand = 0;
        };
    
    };
    
    
};
