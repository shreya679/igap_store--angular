export class Business {
  id: number;
  name: string;
  mobileno: string;
  email: string;
  cityid: number;
  pincode: string;
  password: string;

  
  
  title:string;
  description:string;


  constructor(business) {
      this.id = business.id || 0;
      this.name = business.name || "";
      this.mobileno = business.mobileno || "";
      this.email = business.email || "";
      this.cityid = business.cityid || 0;
      this.pincode = business.pincode || "";
      this.password = business.password || "";
      
      
      this.title = business.title || "";
      this.description = business.description || "";
  }
}
