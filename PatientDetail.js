class PatientDetail{
    
    constructor(){
      
    }
    display(){
        background(background2);
        this.show();
        patientSubmit.mousePressed (()=>{
            this.hide();  
            selectDisease.display();
        })
        patientPrev.mousePressed (()=>{
           this.hide();
           introdution.display();
                   
        })
    }
    show() {
        patientName.show();
        patientAge.show();
        patientSex.show();
        patientPrev.show();
        patientSubmit.show();
    }
    hide() {
        patientName.hide();
        patientAge.hide();
        patientSex.hide();
        patientSubmit.hide();
        patientPrev.hide();
    }
}