if(query.calculate){

let date = this.mfgDate;//'27/05/2020'
let year = parseInt(date.split('/')[2],10)+1;
let expDate = date.split('/')[0]+'/'+date.split('/')[1]+'/'+year.toString();

this.expDate = expDate;

let formattedDate = this.expDate.split('/')[1]+'/'+this.expDate.split('/')[0]+'/'+this.expDate.split('/')[2];
var ExpdateObject = new Date(formattedDate);
var CurrentDateObject = new Date();

if(ExpdateObject>CurrentDateObject)
this.inWarranty = true;

else
this.inWarranty = false;

    
}