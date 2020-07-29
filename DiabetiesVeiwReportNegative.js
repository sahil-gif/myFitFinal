class DiabetiesViewReportNegative{
    constructor(){
       this.show();
    }
    display(){
        this.show();
        viewReportDiabetiesNegativeNext.mousePressed (()=>{
            this.hide();  
            dTips.display();
            //selectDisease.display();
        })
        viewReportDiabetiesNegativePrevious.mousePressed (()=>{
           this.hide();
           selectDisease.display();
                   
        })
        diabetiesVeiwReport.mousePressed(()=>{
            document.writeln("<b>Name :</b>", patientName.value()+"<br>");
            document.writeln("<b>Age :</b>", patientAge.value()+"<br>");
            document.writeln("<b>Sex :</b>", patientSex.value()+"<br>");
            document.writeln("<b>Disease :</b>", " Diabeties.");
        })
    }
    show(){
        viewReportDiabetiesNegativeNext.show();
        viewReportDiabetiesNegativePrevious.show();
        viewReportDiabetiesNegativeNotSafe.show();
        diabetiesVeiwReport.show();
    }
    hide(){
        viewReportDiabetiesNegativeNotSafe.hide();
        viewReportDiabetiesNegativeNext.hide();
        viewReportDiabetiesNegativePrevious.hide();
        diabetiesVeiwReport.hide();
    }
}