/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dateUtil={
    intialDate:new Date('2017-03-25')
};
(function(){
   dateUtil.validate=function(){
       var startDate=this.getstartDate();
       var endDate=this.getendDate();
       var label=document.getElementById("start-date-error");
       if(startDate<his.intialDate){
           
           label.innerHTML="start date should be greater then '03/25/2017'";
           label.setAttribute("class","error");
       }else if(endDate<startDate){
           
           label.innerHTML="end date should be greater then start date";
           label.setAttribute("class","error");
       }else{
           label.innerHTML="";
          label.setAttribute("class","hide"); 
       }
   };
   dateUtil.getNumbrOfDay=function(){
       var startDate=this.getstartDate();
       var endDate=this.getendDate();
       var diff=endDate-startDate;
       var numberOfDay=(diff)/(1000*60*60*24);
       var label=document.getElementById("number-of-day-id");
       label.innerHTML="number of days="+numberOfDay;
   };
   dateUtil.tomorrow=function(){
      var tomorrowLabel=document.getElementById("tomorrow-id");
      var today=new Date();
      var tomorrow=today.getDate()+1;
      today.setDate(tomorrow);
      tomorrowLabel.innerHTML=today;
   };
   dateUtil.getstartDate=function(){
       var date=document.getElementById("start-date-id");
       return date.valueAsDate;
   };
   dateUtil.getendDate=function(){
      var date= document.getElementById("end-date-id");
      return date.valueAsDate;
   };
   
})();


