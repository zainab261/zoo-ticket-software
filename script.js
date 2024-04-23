class ticket{
    constructor (guest){
        this.guest=[]
    }
    add_age(age){
        this.guest.push(age);
    }
    calculateprice(){
        let price=0;
        for (let i=0;i<this.guest.length;i++){
            if (this.guest[i]<=2){
                price+=0;
            }else if(this.guest[i]>2 && this.guest[i]< 18){
                price+=100;
            }else if(this.guest[i]>=18 && this.guest[i]<60){
                price+=500;
            }else {
                price+=300;
            }
        }
        return price;
    }
    display(){
        console.log("Ticket Details are shown below :");
        for (let i=0;i<this.guest.length;i++){
            console.log(`Guest ${i+1} (Age:${this.guest[i]})`);
        }
        console.log(`Total Ticket Price: INR ${this.calculateprice()}`)
    }
}
function show(){
    const money=new ticket();
    money.add_age(15);
    money.add_age(3);
    money.add_age(56);
    money.display();
}
show();
