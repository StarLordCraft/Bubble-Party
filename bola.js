export default class Bola{
    constructor(arrayBolas, palco){
        this.tam = Math.round((Math.random() * 15) + 10)
        
        this.r = Math.round(Math.random() * 255);
        this.g = Math.round(Math.random() * 255);
        this.b = Math.round(Math.random() * 255);

        this.px = Math.round(Math.random() * (palco.offsetWidth - this.tam));
        this.py = Math.round(Math.random() * (palco.offsetHeight - this.tam));

        this.velX = Math.round((Math.random() * 2) + 0.5);
        this.velY = Math.round((Math.random() * 2) + 0.5);
        this.dirX = (Math.round((Math.random() * 10)) > 5)? 1 : -1;
        this.dirY = (Math.round((Math.random() * 10)) > 5)? 1 : -1;
    
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = `${Date.now()}.${Math.floor(Math.random() * 100000000000000)}`;
    
        this.draw();

        this.connection = document.getElementById(`${this.id}`);
        
        this.controles = setInterval(() => this.control(), 1)
    }

    draw(){
        const div = document.createElement('div');
        div.setAttribute('id', this.id);
        
        div.setAttribute('class', 'bubble');

        div.setAttribute('style', 
        `left:${this.px}px; 
        top:${this.py}px; 
        width:${this.tam}px; 
        height:${this.tam}px; 
        background-color:rgb(${this.r}, ${this.g}, ${this.b})`)

        this.palco.appendChild(div);
    }

    colision(){
        if(this.px <= 0)this.dirX = 1;
        if((this.px + this.tam >= this.palco.offsetWidth))this.dirX = -1;

        if(this.py <= 0)this.dirY = 1;
        if((this.py + this.tam >= this.palco.offsetHeight))this.dirY = -1;
    }

    control(){
        this.colision();
        
        this.px += this.dirX * this.velX;
        this.py += this.dirY * this.velY;

        this.connection.setAttribute('style', 
        `left:${this.px}px; 
        top:${this.py}px; 
        width:${this.tam}px; 
        height:${this.tam}px; 
        background-color:rgb(${this.r}, ${this.g}, ${this.b})`)

        if((this.px > this.palco.offsetWidth) || (this.py > this.palco.offsetHeight))this.delete();
    }

    delete(){
        clearInterval(this.controle);

        this.arrayBolas = this.arrayBolas.filter((b) => {
            if(b.id != this.id){
                return b;
            }
        })

        this.connection.remove();
    }
}