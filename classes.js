
class Hero{
    constructor (nomeHeroi, idadeHeroi, tipoHeroi){
    this.nomeHeroi = nomeHeroi;
    this.idadeHeroi = idadeHeroi;
    this.tipoHeroi = tipoHeroi;

}
    attack () {
        let ataque = " " ;

        switch(this.tipoHeroi){
            case "Mago":
                ataque = "Magia";
                break;
            case "Guerreiro":
                ataque = "Espada";
                break;
            case "Monge":
                ataque = "artes marciais";
                break;
            case "Ninja":
                ataque = "Shuriken";
                break
            default:
                ataque = "desconhecido"
        }

console.log (`O ${this.tipoHeroi} atacou usando ${ataque}`);
   
    }
}
        


let heroMago = new Hero("Gandalf","28", "Mago");
	heroMago.attack();
    
let heroGuerreiro = new Hero ("Boris", "31", "Guerreiro");
	heroGuerreiro.attack();
    
let heroMonge = new Hero ("Zion","35","Monge");
	heroMonge.attack();
    
let heroNinja = new Hero ("Jack", "27", "Ninja")
	heroNinja.attack();