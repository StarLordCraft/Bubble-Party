export default class Bola{
    constructor(arrayBolas, palco){
        this.tam = Math.round((Math.random() * 15) + 10)
        
        this.r = Math.round(Math.random() * 255);
        this.g = Math.round(Math.random() * 255);
        this.b = Math.round(Math.random() * 255);

        this.px = Math.round(Math.random() * (palcoWidth - this.tam));
        this.py = Math.round(Math.random() * (palcoHeight - this.tam));

        this.velX = Math.round((Math.random() * 2) + 0.5);
        this.velY = Math.round((Math.random() * 2) + 0.5);
        this.dirX = (Math.round((Math.random() * 10)) > 5)? 1 : -1;
        this.dirY = (Math.round((Math.random() * 10)) > 5)? 1 : -1;
    
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = `${Date.now}.${Math.floor(Math.random() * 100000000000000)}`;
    
        this.draw();

        this.controle = requestAnimationFrame(this.control)
        this.connection = document.getElementById(this.id);
        
        this.arrayUpdate = () => {
            arrayBolas = this.arrayBolas;
        }
    }

    draw(){
        const div = document.createElement('div');
        div.setAttribute('id', this.id);
        
        div.setAttribute('class', 'bola');

        div.setAttribute('style', 
        `left:${this.px}; 
        top:${this.py} 
        width:${this.tam}; 
        height:${this.tam} 
        background-color:rgb(${this.r}, ${this.g}, ${this.b})`)
    
        this.palco.appendchild(div);
    }

    control(){

    }

    index(){
        return this.arrayBolas.indexOf(this);
    }

    delete(){
        //TESTE NECESSÁRIO, TALVEZ O ARRAYUPDATE NAO FUNCIONE CORRETAMENTE.
        clearInterval(this.controle);

        this.arrayBolas = this.arrayBolas.filter((b) => {
            if(b.id != this.id){
                return b;
            }
        })
        
        this.arrayUpdate();

        this.connection.remove();
    }
}