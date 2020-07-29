class CTips{
    constructor(){
        this.show();
    }
    display(){
        background(background7);
        this.show();
    ctipPrev.mousePressed (()=>{
            this.hide();
            viewReportNegative.display();
        })
    }
    show(){
       ctipPrev.show();
     //  bptip.show();
       ctip1.show();
       ctip2.show();
       ctip3.show();
       ctip1Advice.show();
       ctip2Advice.show();
       ctip3Advice.show();
       ctipAdvice.show();


    }
    hide(){
        ctipPrev.hide();
     //  bptip.hide();
       ctip1.hide();
       ctip2.hide();
       ctip3.hide();
       ctipAdvice.hide();
       ctip1Advice.hide();
       ctip2Advice.hide();
       ctip3Advice.hide();
    }      

}