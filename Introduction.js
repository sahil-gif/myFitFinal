class Introduction {
    constructor(){
        
    }
    display(){
        background(background1);
        this.show();
        start.mousePressed (()=>{  
            this.hide();     
        this.showPatientDetail();
        })
    }
    showPatientDetail(){
        patientDetail.display();
    }
    show() {
        start.show();
    }
    hide() {
        start.hide();
    }
}