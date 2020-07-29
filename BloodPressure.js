class BloodPressure{
    constructor(){
       this.show();
    }
    display(){
        background(background4);
        this.show();        
        bloodPressureSubmit.mousePressed (()=>{
            score = 0;
            BPvalueYesNo1 = bloodPressureYesNo1.value();
            BPvalueYesNo2 = bloodPressureYesNo2.value();
            BPvalueYesNo3 = bloodPressureYesNo3.value();
            BPvalueYesNo4 = bloodPressureYesNo4.value();
            BPvalueYesNo5 = bloodPressureYesNo5.value();
            BPvalueYesNo6 = bloodPressureYesNo6.value();
            BPvalueYesNo7 = bloodPressureYesNo7.value();


            if(BPvalueYesNo1==='Yes'){
                score=score+1;
            }
            if(BPvalueYesNo2==='Yes'){
                score=score+1;
            }
            if(BPvalueYesNo3==='Yes'){
                score=score+1;
            }
            if(BPvalueYesNo4==='Yes'){
                score=score+1;
            }
            if(BPvalueYesNo5==='Yes'){
                score=score+1;
            }
            if(BPvalueYesNo6==='Yes'){
                score=score+1;
            }
            if(BPvalueYesNo7==='Yes'){
                score=score+1;
            }
            console.log(score);
            if(score >= 5){
                viewReportNegative.display();
            }else{
                viewReport.display();
            }

         // 
            this.hide();
           // viewReport.display();
        })
        bloodPressurePrev.mousePressed (()=>{
            score = 0;
            this.hide();
            
            selectDisease.display();
        })
        
    }
   show(){
       bloodPressureSubmit.show();
       bloodPressurePrev.show();
       
       bloodPressureQuestion1.show();
       bloodPressureQuestion2.show();
       bloodPressureQuestion3.show();
       bloodPressureQuestion4.show();
       bloodPressureQuestion5.show();
       bloodPressureQuestion6.show();
       bloodPressureQuestion7.show();
       bloodPressureYesNo1.show();
       bloodPressureYesNo2.show();
       bloodPressureYesNo3.show();
       bloodPressureYesNo4.show();
       bloodPressureYesNo5.show();
       bloodPressureYesNo6.show();
       bloodPressureYesNo7.show();

   }
   hide(){
       bloodPressureSubmit.hide();
       bloodPressurePrev.hide();
      
       bloodPressureQuestion1.hide();
       bloodPressureQuestion2.hide();
       bloodPressureQuestion3.hide();
       bloodPressureQuestion4.hide();
       bloodPressureQuestion5.hide();
       bloodPressureQuestion6.hide();
       bloodPressureQuestion7.hide();
       bloodPressureYesNo1.hide();
       bloodPressureYesNo2.hide();
       bloodPressureYesNo3.hide();
       bloodPressureYesNo4.hide();
       bloodPressureYesNo5.hide();
       bloodPressureYesNo6.hide();
       bloodPressureYesNo7.hide();
   }
}