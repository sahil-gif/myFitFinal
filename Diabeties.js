class Diabeties{
    constructor(){
       this.show();
    }
    display(){
        background(background5);
        this.show();

        diabetiesSubmit.mousePressed (()=>{
            scoreDiabeties= 0;
            sugarvalueYesNo1 = diabetiesYesNo1.value();
            sugarvalueYesNo2 = diabetiesYesNo2.value();
            sugarvalueYesNo3 = diabetiesYesNo3.value();
            sugarvalueYesNo4 = diabetiesYesNo4.value();
            sugarvalueYesNo5 = diabetiesYesNo5.value();
            sugarvalueYesNo6 = diabetiesYesNo6.value();
            sugarvalueYesNo7 = diabetiesYesNo7.value();

            if(sugarvalueYesNo1==='Yes'){
                scoreDiabeties=scoreDiabeties+1;
            }
            if(sugarvalueYesNo2==='Yes'){
                scoreDiabeties=scoreDiabeties+1;
            }
            if(sugarvalueYesNo3==='Yes'){
                scoreDiabeties=scoreDiabeties+1;
            }
            if(sugarvalueYesNo4==='Yes'){
                scoreDiabeties=scoreDiabeties+1;
            }
            if(sugarvalueYesNo5==='Yes'){
                scoreDiabeties=scoreDiabeties+1;
            }
            if(sugarvalueYesNo6==='Yes'){
                scoreDiabeties=scoreDiabeties+1;
            }
            if(sugarvalueYesNo7==='Yes'){
                scoreDiabeties=scoreDiabeties+1;
            }
            console.log(scoreDiabeties);
            if(scoreDiabeties >= 5){
                diabetiesViewReportNegative.display();
            }else{
                viewReport.display();
            }

            this.hide();
           // viewReport.display();

        })
        diabetiesPrev.mousePressed (()=>{
            this.hide();
            selectDisease.display();
        })
    }
   show(){
       diabetiesQuestion1.show();
       diabetiesQuestion2.show();
       diabetiesQuestion3.show();
       diabetiesQuestion4.show();
       diabetiesQuestion5.show();
       diabetiesQuestion6.show();
       diabetiesQuestion7.show();

       diabetiesSubmit.show();
       diabetiesPrev.show();
       diabetiesYesNo1.show();
       diabetiesYesNo2.show();
       diabetiesYesNo3.show();
       diabetiesYesNo4.show();
       diabetiesYesNo5.show();
       diabetiesYesNo6.show();
       diabetiesYesNo7.show();
   }
   hide(){
       diabetiesQuestion1.hide();
       diabetiesQuestion2.hide();
       diabetiesQuestion3.hide();
       diabetiesQuestion4.hide();
       diabetiesQuestion5.hide();
       diabetiesQuestion6.hide();
       diabetiesQuestion7.hide();
       diabetiesSubmit.hide();
       diabetiesPrev.hide();
       diabetiesYesNo1.hide();
       diabetiesYesNo2.hide();
       diabetiesYesNo3.hide();
       diabetiesYesNo4.hide();
       diabetiesYesNo5.hide();
       diabetiesYesNo6.hide();
       diabetiesYesNo7.hide();
   }
}