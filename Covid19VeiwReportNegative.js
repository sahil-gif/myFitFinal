class Covid19ViewReportNegative{
    constructor(){
       this.show();
    }
    display(){
        this.show();
        viewReportCovid19NegativeNext.mousePressed (()=>{
            this.hide();  
            //selectDisease.display();
            cTips.display();
        })
        viewReportCovid19NegativePrevious.mousePressed (()=>{
           this.hide();
           selectDisease.display();
                   
        })
        Covid19VeiwReport.mousePressed(()=>{
            document.writeln("<b>Name :</b>", patientName.value()+"<br>");
            document.writeln("<b>Age :</b>", patientAge.value()+"<br>");
            document.writeln("<b>Sex :</b>", patientSex.value()+"<br>");
            document.writeln("<b>Disease :</b>", " Covid-19.");
        })
    }
    show(){
        viewReportCovid19NegativeNext.show();
        viewReportCovid19NegativePrevious.show();
        viewReportCovid19NegativeNotSafe.show();
        Covid19VeiwReport.show();
    }
    hide(){
        viewReportCovid19NegativeNotSafe.hide();
        viewReportCovid19NegativeNext.hide();
        viewReportCovid19NegativePrevious.hide();
        Covid19VeiwReport.hide();
    }
}