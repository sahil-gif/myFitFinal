class SelectDisease{
    constructor(){
       
        this.show();
    }
    display(){
        background(background3);
        this.show();
       diseaseSubmit.mousePressed (()=>{
        value = diseaseSelection.value();
        this.hide();

       //    diseaseDetail.display();
       if(value === 'Blood Pressure'){
           bloodPressure.display();
            //console.log(value);
       }
       if(value==='Diabeties'){
           diabeties.display();
       }
       if(value==='covid-19'){
           covid19.display();
       }

        })
        diseasePrev.mousePressed(()=>{
            this.hide();
            patientDetail.display();
        })


    }
    show(){
       diseaseSelection.show();
       questionSelectDisease.show();
       diseaseSubmit.show();
       diseasePrev.show();

    }
    hide(){
        diseaseSelection.hide();
        questionSelectDisease.hide();
        diseaseSubmit.hide();
        diseasePrev.hide();
    }
}