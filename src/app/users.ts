export class Users {
    policyNo:number=0;
    HolderName:string="";
    amount:number=0;
    amountforEMI:number=0;
    nomineename:string="";

    constructor(policyNo:number,HolderName:string,amount:number,amountforEMI:number,nomineename:string){
        this.policyNo=policyNo;
        this.HolderName=HolderName;
        this.amount=amount;
        this.amountforEMI=amountforEMI;
        this.nomineename=nomineename;

    }
}
