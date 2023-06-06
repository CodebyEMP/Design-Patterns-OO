class cl_popcorn{

    constructor(){

    this._popcornmaschinenzustand = 0;

    }

    popcornMachen(){

       if(this._popcornmaschinenzustand == 0){
        console.log('Popcornaschine ist aus und sollte angeschaltet werden, um Popcorn herzustellen!');
       } 
       else{
        console.log('Popcorn wird hergestellt!');
       };
       
    };
    popcornMaschineAn(){

       if(this._popcornmaschinenzustand == 1){
        console.log('Popcornmaschine ist bereits an!');
       }
       else{
        console.log('Popcornmaschine wird eingeschaltet');
        this._popcornmaschinenzustand = 1;
       };

    };
    popcornMaschineAus(){

        if(this._popcornmaschinenzustand == 0){
            console.log('Popcornmaschine ist bereits aus!');
        }
        else{
            console.log('Popcornmaschine wird ausgeschaltet');
            this._popcornmaschinenzustand = 0;
        };
    
    };
    
    
};
