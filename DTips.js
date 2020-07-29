class DTips{
    constructor(){
        this.show();
    }
    display(){
        background(background9);
        this.show();
    dtipPrev.mousePressed (()=>{
            this.hide();
            viewReportNegative.display();
        })
    }
    show(){
       dtipPrev.show();
     //  bptip.show();
       dtip1.show();
       dtip2.show();
       dtip3.show();
       dtip1Advice.show();
       dtip2Advice.show();
       dtip3Advice.show();
       dtipAdvice.show();


    }
    hide(){
        dtipPrev.hide();
     //  bptip.hide();
       dtip1.hide();
       dtip2.hide();
       dtip3.hide();
       dtipAdvice.hide();
       dtip1Advice.hide();
       dtip2Advice.hide();
       dtip3Advice.hide();
    }      

}