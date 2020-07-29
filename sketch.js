
var introdution,patientDetail,selectDisease,diseaseDetail,viewReport,bloodPressure,diabeties,covid19,viewReportNegative,diabetiesViewReportNegative,covid19VeiwReportNegative,tip,bpTips,dTips,cTips;
var patientName, patientAge, patientSex, patientSubmit, patientPrev;
var data;
var diseaseSelection,questionSelectDisease,diseaseSubmit,diseasePrev;
var  bloodPressureSubmit,bloodPressurePrev,bloodPressureQuestion1,bloodPressureQuestion2,bloodPressureQuestion3,bloodPressureQuestion4,bloodPressureQuestion5,bloodPressureQuestion6,bloodPressureQuestion7,bloodPressureYesNo1,bloodPressureYesNo2,bloodPressureYesNo3,bloodPressureYesNo4,bloodPressureYesNo5,bloodPressureYesNo6,bloodPressureYesNo7,bloodPressureVeiwReport;
var diabetiesSubmit,diabetiesPrev,diabetiesQuestion1,diabetiesQuestion2,diabetiesQuestion3,diabetiesQuestion4,diabetiesQuestion5,diabetiesQuestion6,diabetiesQuestion7,diabetiesYesNo1,diabetiesYesNo2,diabetiesYesNo3,diabetiesYesNo4,diabetiesYesNo5,diabetiesYesNo6,diabetiesYesNo7;
var covid19Question1,covid19Question2,covid19Question3,covid19Question4,covid19Question5,covid19Question6,covid19Question7,covid19Submit,covid19Prev,covid19YesNo1,covid19YesNo2,covid19YesNo3,covid19YesNo4,covid19YesNo5,covid19YesNo6,covid19YesNo7;
var viewReportSafe,viewReportNext,viewReportPrevious,viewReportTip;
var viewReportNegativeNext,viewReportNegativePrevious,viewReportNegativeNotSafe;
var viewReportDiabetiesNegativeNext,viewReportDiabetiesNegativePrevious,viewReportDiabetiesNegativeNotSafe,diabetiesVeiwReport;
var viewReportCovid19NegativeNext,viewReportCovid19NegativePrevious,viewReportCovid19NegativeNotSafe,covid19VeiwReport;
var score = 0;
var scoreDiabeties = 0 ;
var scoreCovid19 = 0 ;
var BPvalueYesNo1,BPvalueYesNo2,BPvalueYesNo3,BPvalueYesNo4,BPvalueYesNo5,BPvalueYesNo6,BPvalueYesNo7;
var sugarvalueYesNo1,sugarvalueYesNo2,sugarvalueYesNo3,sugarvalueYesNo4,sugarvalueYesNo5,sugarvalueYesNo6,sugarvalueYesNo7;
var covid19valueYesNo1,covid19valueYesNo2,covid19valueYesNo3,covid19valueYesNo4,covid19valueYesNo5,covid19valueYesNo6,covid19valueYesNo7;
var valuecovid19;
var valueDiabeties;
var value;
var tipsEarn,tipsEFullForm,tipsAFullForm,tipsRFullForm,tipsNFullForm,tipsExercise,tipsExercise2,tipsAttitude,tipsRest,tipsNutrition,tipsprev;
var bptipAdvice,bptip2Advice,bptip3Advice,bptip1Advice,bptip,bptip1,bptip2,bptip3,bptipPrev;
var dtipAdvice,dtip2Advice,dtip3Advice,dtip1Advice,dtip,dtip1,dtip2,dtip3,dtipPrev;
var background1,background2,background3,background4,background5,background6,background7,background8,background9;

function preload (){
    background1 = loadImage("background1.png");
    background2 = loadImage("background2.png");
    background3 = loadImage("background3.png");
    background4 = loadImage("bp.png");
    background5 = loadImage("diabeties.png");
    background6 = loadImage("covid19.png");
    background7 = loadImage("covid.png");
    background8 = loadImage("bp1.png");
    background9 = loadImage("diabeties2.png");
    
}
function setup(){
    
canvas = createCanvas(displayWidth-10,displayHeight);
initializeCTips();
initializeDTips();
initializeBPTips();
initializeTips();
initializeVeiwReportCovid19Negative();
initializeVeiwReportDiabetiesNegative();
initializeVeiwReportNegative();
initializeVeiwReport();
intializeCovid19();
initializeDiabeties();
initializePatientDetail();
initializeBloodPressure();
initializeDisease();
initializeIntroduction();

bloodPressure = new BloodPressure();
bloodPressure.hide();
diabeties = new Diabeties();
diabeties.hide();
covid19 = new Covid19();
covid19.hide();

selectDisease = new SelectDisease();
selectDisease.hide();

patientDetail = new PatientDetail();
patientDetail.hide();

introdution = new Introduction(patientDetail);
introdution.display();
//selectDisease.display();


viewReport = new ViewReport();   
viewReport.hide();

viewReportNegative = new ViewReportNegative;
viewReportNegative.hide();

diabetiesViewReportNegative = new DiabetiesViewReportNegative;
diabetiesViewReportNegative.hide();

covid19VeiwReportNegative = new Covid19ViewReportNegative;
covid19VeiwReportNegative.hide();

tip = new Tip ;
tip.hide();

bpTips = new BPTips ;
bpTips.hide();

dTips = new DTips ;
dTips.hide();

cTips = new CTips;
cTips.hide();
}

function initializeIntroduction() {
    start = createButton('Start');      
    start.position(displayWidth/2-50,displayHeight/2+130);
    start.style('width', '200px');
    start.style('background-color', '#0ed18d');
}

function initializePatientDetail() {
    patientName = createInput('Name');
    patientName.position(200, 200);
    
    patientAge = createInput('Age');
    patientAge.position(200, 230);
    
    patientSex = createRadio();
    patientSex.position(200, 260);
    patientSex.option('Male');
    patientSex.option('Female');

    patientSubmit = createButton('Submit');
    patientPrev = createButton('Previous');        

    patientSubmit.position(200,300);
    patientPrev.position(300,300);

   
}
function initializeDisease(){
    diseaseSelection = createRadio();
    diseaseSelection.position(250,200);
    diseaseSelection.option('Blood Pressure');
    diseaseSelection.option('Diabeties');
    diseaseSelection.option('covid-19');

    questionSelectDisease = createElement('h2','Select disease');
    questionSelectDisease.position(100,100);

    diseaseSubmit = createButton('Next');
    diseasePrev = createButton('Previous');

    diseaseSubmit.position(350,250);
    diseasePrev.position(450,250);
}
function initializeBloodPressure(){
    bloodPressureSubmit = createButton('Submit');
    bloodPressurePrev = createButton('Previous');
   
    bloodPressureSubmit.position(600,720);
    bloodPressurePrev.position(720, 720);
    

    bloodPressureQuestion1 = createElement('h2','Are you Experiencing Severe headache ?');
    bloodPressureQuestion1.position(30,30);
    bloodPressureQuestion2 = createElement('h2','Are you Experiencing NoseBleed ?');
    bloodPressureQuestion2.position(30,130);
    bloodPressureQuestion3 = createElement('h2','Are you Experiencing Fatigue or confusion ?');
    bloodPressureQuestion3.position(30,230);
    bloodPressureQuestion4 = createElement('h2','Are you Experiencing Vision problems ?');
    bloodPressureQuestion4.position(30,330);
    bloodPressureQuestion5 = createElement('h2','Are you experiencing Chest pain and Difficulty breathing ?');
    bloodPressureQuestion5.position(30,430);
    bloodPressureQuestion6 = createElement('h2','Are you Experiencing Irregular heartbeat ?');
    bloodPressureQuestion6.position(30,530);
    bloodPressureQuestion7 = createElement('h2','Are you Experiencing Blood in the urine ?');
    bloodPressureQuestion7.position(30,630);

    bloodPressureYesNo1 = createRadio();
    bloodPressureYesNo1.position(50,100);
    bloodPressureYesNo1.option('Yes');
    bloodPressureYesNo1.option('No');   

    bloodPressureYesNo2 = createRadio();
    bloodPressureYesNo2.position(50,200);
    bloodPressureYesNo2.option('Yes');
    bloodPressureYesNo2.option('No');

    bloodPressureYesNo3 = createRadio();
    bloodPressureYesNo3.position(50,300);
    bloodPressureYesNo3.option('Yes');
    bloodPressureYesNo3.option('No');

    bloodPressureYesNo4 = createRadio();
    bloodPressureYesNo4.position(50,400);
    bloodPressureYesNo4.option('Yes');
    bloodPressureYesNo4.option('No');

    bloodPressureYesNo5 = createRadio();
    bloodPressureYesNo5.position(50,500);
    bloodPressureYesNo5.option('Yes');
    bloodPressureYesNo5.option('No');

    bloodPressureYesNo6 = createRadio();
    bloodPressureYesNo6.position(50,600);
    bloodPressureYesNo6.option('Yes');
    bloodPressureYesNo6.option('No');

    bloodPressureYesNo7 = createRadio();
    bloodPressureYesNo7.position(50,700);
    bloodPressureYesNo7.option('Yes');
    bloodPressureYesNo7.option('No');
}
function initializeDiabeties(){
    diabetiesSubmit = createButton('Submit');
    diabetiesPrev = createButton('Previous');
    diabetiesSubmit.position(600,720);
    diabetiesPrev.position(720,720);

    diabetiesQuestion1 = createElement('h2','Are you Urinating often. ?');
    diabetiesQuestion1.position(30,30);
    diabetiesQuestion2 = createElement('h2','Are you Feeling very thirsty ?');
    diabetiesQuestion2.position(30,130);
    diabetiesQuestion3 = createElement('h2','Are you Feeling very hungry—even though you are eating ?');
    diabetiesQuestion3.position(30,230);
    diabetiesQuestion4 = createElement('h2','Are you Feeling Extreme fatigue ?');
    diabetiesQuestion4.position(30,330);
    diabetiesQuestion5 = createElement('h2','Are you Experiencing Blurry vision ?');
    diabetiesQuestion5.position(30,430);
    diabetiesQuestion6 = createElement('h2','Are you Experiencing Cuts/bruises that are slow to heal ?');
    diabetiesQuestion6.position(30,530);
    diabetiesQuestion7 = createElement('h2','Are you Experiencing Weight loss—even though you are eating more ?');
    diabetiesQuestion7.position(30,630);

    diabetiesYesNo1 = createRadio();
    diabetiesYesNo1.position(50,100);
    diabetiesYesNo1.option('Yes');
    diabetiesYesNo1.option('No');   

    diabetiesYesNo2 = createRadio();
    diabetiesYesNo2.position(50,200);
    diabetiesYesNo2.option('Yes');
    diabetiesYesNo2.option('No');

    diabetiesYesNo3 = createRadio();
    diabetiesYesNo3.position(50,300);
    diabetiesYesNo3.option('Yes');
    diabetiesYesNo3.option('No');

    diabetiesYesNo4 = createRadio();
    diabetiesYesNo4.position(50,400);
    diabetiesYesNo4.option('Yes');
    diabetiesYesNo4.option('No');

    diabetiesYesNo5 = createRadio();
    diabetiesYesNo5.position(50,500);
    diabetiesYesNo5.option('Yes');
    diabetiesYesNo5.option('No');

    diabetiesYesNo6 = createRadio();
    diabetiesYesNo6.position(50,600);
    diabetiesYesNo6.option('Yes');
    diabetiesYesNo6.option('No');

    diabetiesYesNo7 = createRadio();
    diabetiesYesNo7.position(50,700);
    diabetiesYesNo7.option('Yes');
    diabetiesYesNo7.option('No');

}
function intializeCovid19(){
    covid19Submit = createButton('Submit');
    covid19Prev = createButton('Previous');
    covid19Submit.position(600,720);
    covid19Prev.position(720, 720);

    covid19Question1 = createElement('h2','Are you experiencing fever,dry cough,tiredness ?');
    covid19Question1.position(30,30);
    covid19Question2 = createElement('h2','Are you experiencing difficulty breathing or shortness of breath ?');
    covid19Question2.position(30,130);
    covid19Question3 = createElement('h2','Are you experiencing chest pain or pressure ?');
    covid19Question3.position(30,230);
    covid19Question4 = createElement('h2','Are you experiencing loss of speech or movement ?');
    covid19Question4.position(30,330);
    covid19Question5 = createElement('h2','Are you experiencing aches and pains ?');
    covid19Question5.position(30,430);
    covid19Question6 = createElement('h2','Are you experiencing diarrhoea and conjunctivitis ?');
    covid19Question6.position(30,530);
    covid19Question7 = createElement('h2','Are you experiencing headache and  loss of taste or smell ?');
    covid19Question7.position(30,630);

    covid19YesNo1 = createRadio();
    covid19YesNo1.position(50,100);
    covid19YesNo1.option('Yes');
    covid19YesNo1.option('No');   

    covid19YesNo2 = createRadio();
    covid19YesNo2.position(50,200);
    covid19YesNo2.option('Yes');
    covid19YesNo2.option('No');

    covid19YesNo3 = createRadio();
    covid19YesNo3.position(50,300);
    covid19YesNo3.option('Yes');
    covid19YesNo3.option('No');

    covid19YesNo4 = createRadio();
    covid19YesNo4.position(50,400);
    covid19YesNo4.option('Yes');
    covid19YesNo4.option('No');

    covid19YesNo5 = createRadio();
    covid19YesNo5.position(50,500);
    covid19YesNo5.option('Yes');
    covid19YesNo5.option('No');

    covid19YesNo6 = createRadio();
    covid19YesNo6.position(50,600);
    covid19YesNo6.option('Yes');
    covid19YesNo6.option('No');

    covid19YesNo7 = createRadio();
    covid19YesNo7.position(50,700);
    covid19YesNo7.option('Yes');
    covid19YesNo7.option('No');
}
function initializeVeiwReport(){
    viewReportSafe = createElement('h1','You are Absolutely fit.');
    viewReportSafe.position(200,200);

    viewReportNext = createButton('Next');
    viewReportPrevious = createButton('Previous');
    viewReportTip = createButton('Tips');

    viewReportNext.position(500,600);
    viewReportPrevious.position(600,600);
    viewReportTip.position(700,600);
}
function initializeVeiwReportNegative(){
    viewReportNegativeNotSafe = createElement('h1','We are Sorry, You May be Suffering with high Blood Pressure.');
    viewReportNegativeNotSafe.position(200,200);

    viewReportNegativeNext = createButton('Tips');
    viewReportNegativePrevious = createButton('Previous');

    viewReportNegativeNext.position(500,600);
    viewReportNegativePrevious.position(600,600);

    bloodPressureVeiwReport =createButton('Veiw Report');
    bloodPressureVeiwReport.position(700,600);
}
function initializeVeiwReportDiabetiesNegative(){
    viewReportDiabetiesNegativeNotSafe = createElement('h1','We are Sorry, You May be Suffering with  Diabeties.');
    viewReportDiabetiesNegativeNotSafe.position(200,200);

    viewReportDiabetiesNegativeNext = createButton('Tips');
    viewReportDiabetiesNegativePrevious = createButton('Previous');

    viewReportDiabetiesNegativeNext.position(500,600);
    viewReportDiabetiesNegativePrevious.position(600,600);

    diabetiesVeiwReport =createButton('Veiw Report');
    diabetiesVeiwReport.position(700,600);
}
function initializeVeiwReportCovid19Negative(){
    viewReportCovid19NegativeNotSafe = createElement('h1','We are Sorry, You May be Suffering with  Covid-19.');
    viewReportCovid19NegativeNotSafe.position(200,200);

    viewReportCovid19NegativeNext = createButton('Tips');
    viewReportCovid19NegativePrevious = createButton('Previous');

    viewReportCovid19NegativeNext.position(500,600);
    viewReportCovid19NegativePrevious.position(600,600);

    Covid19VeiwReport =createButton('Veiw Report');
    Covid19VeiwReport.position(700,600);
}
function initializeTips(){
    tipsEarn = createElement('h1','EARN');
    tipsEFullForm = createElement('h2','E - Exercise');
    tipsAFullForm = createElement('h2','A - Attitude');
    tipsRFullForm = createElement('h2','R - Rest');
    tipsNFullForm = createElement('h2','N - Nutrition');
    tipsExercise = createElement('h2','EXERCISE - Help you control your weight. ...    ')
    tipsExercise2 = createElement('h2','Reduce your risk of heart diseases. ...');
    tipsAttitude = createElement('h2','ATTITUDE-An active, curious mind,Increased productivity at work.');
    tipsRest = createElement('h2','REST-Better productivity and concentration. ...')
    tipsNutrition = createElement('h2','NUTRITION-Reduce the risk of some diseases, including heart disease, diabetes, stroke, some cancers, and osteoporosis.')
    tipsprev = createButton('Previous');
    tipsEarn.position(200,30);
    tipsEFullForm.position(200,80);
    tipsAFullForm.position(200,130);
    tipsRFullForm.position(200,180);
    tipsNFullForm.position(200,230);
    tipsExercise.position(30,280);
    tipsExercise2.position(30,320);
    tipsAttitude.position(30,360);
    tipsRest.position(30,400);
    tipsNutrition.position(30,440);
    tipsprev.position(600,600);


}
function initializeBPTips(){
    bptipAdvice = createElement('h1','Here are few Advice for Blood Pressure Recovery :-');
    bptipAdvice.position(30,30);
    bptip1 = createElement('h1','SELF CARE');
    bptip1.position(200,100);
    bptip1Advice = createElement('h2','Physical exercise, Stress management, Quitting smoking, Home blood pressure monitors and Low sodium diet ');
    bptip1Advice.position(30,150);
    bptip2 = createElement('h1','MEDICATIONS');
    bptip2.position(200,200);
    bptip2Advice = createElement('h2','ACE inhibitor, Diuretic, Beta blocker, Antihypertensive drug, Calcium channel blocker and Vasodilator    ');
    bptip2Advice.position(30,250);
    bptip3 = createElement('h1','SUPPLIEMENTS');
    bptip3.position(200,300);
    bptip3Advice = createElement('h2','Nutrilite Salmon Omega 3,Nutrilite CH Balance,Nutrilite Garlic,Nutrilite Co-EnzymeQ10');
    bptip3Advice.position(30,350);
    bptipPrev = createButton('Previous');
    bptipPrev.position(600,600);
}
function initializeDTips(){
    dtipAdvice = createElement('h1','Here are few Advice for Diabeties Recovery :-');
    dtipAdvice.position(30,30);
    dtip1 = createElement('h1','SELF CARE');
    dtip1.position(200,100);
   dtip1Advice = createElement('h2','Physical exercise, Stress management, Quitting smoking,Avoid Sweets,Meditation ');
    dtip1Advice.position(30,150);
    dtip2 = createElement('h1','MEDICATIONS');
    dtip2.position(200,200);
    dtip2Advice = createElement('h2','Consult with the Doctor.');
    dtip2Advice.position(30,250);
    dtip3 = createElement('h1','SUPPLIEMENTS');
    dtip3.position(200,300);
   dtip3Advice = createElement('h2','Nutrilite Madhunashni,Nutrilite All plant protein,Nutrilite Ashwagandha,Nutrilite Daily');
    dtip3Advice.position(30,350);
    dtipPrev = createButton('Previous');
    dtipPrev.position(600,600);
}
function initializeCTips(){
    ctipAdvice = createElement('h1','Here are few Advice for Covid-19 Recovery :-');
    ctipAdvice.position(30,30);
    ctip1 = createElement('h1','SELF CARE');
    ctip1.position(200,100);
   ctip1Advice = createElement('h2','Clean Environment ,Personal Cleaniness, Maintain Social Distancing,Use Mask,Face Sheilds and Gloves,Hand Sanitization ');
    ctip1Advice.position(30,150);
    ctip2 = createElement('h1','MEDICATIONS');
    ctip2.position(200,230);
    ctip2Advice = createElement('h2','Consult with the Doctor.');
    ctip2Advice.position(30,280);
    ctip3 = createElement('h1','SUPPLIEMENTS');
    ctip3.position(200,330);
   ctip3Advice = createElement('h2','Nutrilite Echnecea Citrus Concentrate,Nutrilite APP,Nutrilite Tulsi,Nutrilite Daily,Nutrilite Natural C,Nutrilite Vasakha Mulethi & Surasa');
    ctip3Advice.position(30,380);
    ctipPrev = createButton('Previous');
    ctipPrev.position(600,600);
}