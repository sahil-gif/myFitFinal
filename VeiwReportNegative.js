class ViewReportNegative{
    constructor(){
       this.show();
    }
    display(){
        this.show();
        viewReportNegativeNext.mousePressed (()=>{
            this.hide();  
            bpTips.display();
            //selectDisease.display();
        })
        viewReportNegativePrevious.mousePressed (()=>{
           this.hide();
           selectDisease.display();
                   
        })
        bloodPressureVeiwReport.mousePressed(()=>{
            document.writeln("<b>Name :</b>", patientName.value()+"<br>");
            document.writeln("<b>Age :</b>", patientAge.value()+"<br>");
            document.writeln("<b>Sex :</b>", patientSex.value()+"<br>");
            document.writeln("<b>Disease :</b>", " Blood pressure.");
        })
    }
    show(){
        viewReportNegativeNext.show();
        viewReportNegativePrevious.show();
        viewReportNegativeNotSafe.show();
        bloodPressureVeiwReport.show();
    }
    hide(){
        viewReportNegativeNotSafe.hide();
        viewReportNegativeNext.hide();
        viewReportNegativePrevious.hide();
        bloodPressureVeiwReport.hide();
    }
}