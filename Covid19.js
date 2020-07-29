class Covid19{
    constructor(){
       this.show();
    }
    display(){
        background(background6);
       this.show();
        covid19Submit.mousePressed (()=>{
            scoreCovid19= 0;
            covid19valueYesNo1 = covid19YesNo1.value();
            covid19valueYesNo2 = covid19YesNo2.value();
            covid19valueYesNo3 = covid19YesNo3.value();
            covid19valueYesNo4 = covid19YesNo4.value();
            covid19valueYesNo5 = covid19YesNo5.value();
            covid19valueYesNo6 = covid19YesNo6.value();
            covid19valueYesNo7 = covid19YesNo7.value();
            if(covid19valueYesNo1==='Yes'){
                scoreCovid19=scoreCovid19+1;
            }
            if(covid19valueYesNo2==='Yes'){
                scoreCovid19=scoreCovid19+1;
            }
            if(covid19valueYesNo3==='Yes'){
                scoreCovid19=scoreCovid19+1;
            }
            if(covid19valueYesNo4==='Yes'){
                scoreCovid19=scoreCovid19+1;
            }
            if(covid19valueYesNo5==='Yes'){
                scoreCovid19=scoreCovid19+1;
            }
            if(covid19valueYesNo6==='Yes'){
                scoreCovid19=scoreCovid19+1;
            }
            if(covid19valueYesNo7==='Yes'){
                scoreCovid19=scoreCovid19+1;
            }
            console.log(scoreCovid19);
            if(scoreCovid19 >= 5){
                covid19VeiwReportNegative.display();
            }else{
                viewReport.display();
            }
             this.hide();
           // viewReport.display();
        })
        covid19Prev.mousePressed (()=>{
            this.hide();
            selectDisease.display();
            
        })
    }
    show(){
        covid19Question1.show();
        covid19Question2.show();
        covid19Question3.show();
        covid19Question4.show();
        covid19Question5.show();
        covid19Question6.show();
        covid19Question7.show();
        covid19Prev.show();
        covid19Submit.show();
        covid19YesNo1.show();
        covid19YesNo2.show();
        covid19YesNo3.show();
        covid19YesNo4.show();
        covid19YesNo5.show();
        covid19YesNo6.show();
        covid19YesNo7.show();

    }
   hide(){
    covid19Question1.hide();
    covid19Question2.hide();
    covid19Question3.hide();
        covid19Question4.hide();
        covid19Question5.hide();
        covid19Question6.hide();
        covid19Question7.hide();
    covid19Prev.hide();
    covid19Submit.hide();
    covid19YesNo1.hide();
    covid19YesNo2.hide();
    covid19YesNo3.hide();
        covid19YesNo4.hide();
        covid19YesNo5.hide();
        covid19YesNo6.hide();
        covid19YesNo7.hide();

   }
}