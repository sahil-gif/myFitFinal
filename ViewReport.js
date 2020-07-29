class ViewReport{
    constructor(){
       this.show();
    }
    display(){
        this.show();
        viewReportNext.mousePressed (()=>{
            this.hide();  
            //selectDisease.display();
        })
        viewReportPrevious.mousePressed (()=>{
           this.hide();
           selectDisease.display();
                   
        })
        viewReportTip.mousePressed (()=>{
            this.hide();
            tip.display();
                    
         })
    }
    show(){
        viewReportNext.show();
        viewReportPrevious.show();
        viewReportSafe.show();
        viewReportTip.show();
    }
    hide(){
        viewReportSafe.hide();
        viewReportNext.hide();
        viewReportPrevious.hide();
        viewReportTip.hide();
    }
}