if(query.showAll){
    if(this.boxId)
    dpd.boxes.get({id:this.boxId}, res=>{
       this.box = res; 
    });
    if(this.customerId)
    dpd.customers.get({id:this.customerId},res=>{
       this.customer = res; 
    });
    if(this.employeeId)
    dpd.employees.get({id:this.employeeId},res=>{
       this.employee = res; 
    });
    if(this.severityId)
    dpd.severitylevels.get({id:this.severityId},(res)=>{
       this.severity = res;
    });
    if(this.statusId)
    dpd.servicestatus.get({id:this.statusId},res=>{
       this.status = res; 
    });
}