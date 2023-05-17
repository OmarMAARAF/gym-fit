export class Exercice{
    public key:string
    public  bodyPart:string;
    public  equipment:string;
    public  gifUrl:string;
    public  id:string;
    public name:string;
    public target:string;
    constructor(key: string, bodyPart: string, equipment: string, gifUrl: string, id: string, name: string, target: string) {
        this.key = key;
        this.bodyPart = bodyPart;
        this.equipment = equipment;
        this.gifUrl = gifUrl;
        this.id = id;
        this.name = name;
        this.target = target;
      }
}