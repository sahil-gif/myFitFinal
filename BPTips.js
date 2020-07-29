class BPTips{
    constructor(){
        this.show();
    }
    display(){
        background(background8);
        this.show();
    bptipPrev.mousePressed (()=>{
            this.hide();
            viewReportNegative.display();
        })
    }
    show(){
       bptipPrev.show();
     //  bptip.show();
       bptip1.show();
       bptip2.show();
       bptip3.show();
       bptip1Advice.show();
       bptip2Advice.show();
       bptip3Advice.show();
       bptipAdvice.show();


    }
    hide(){
        bptipPrev.hide();
     //  bptip.hide();
       bptip1.hide();
       bptip2.hide();
       bptip3.hide();
       bptipAdvice.hide();
       bptip1Advice.hide();
       bptip2Advice.hide();
       bptip3Advice.hide();
    }      

}