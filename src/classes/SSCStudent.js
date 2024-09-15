class SSCStudent{

 constructor(firstName,lastName,engMarks,hinMarks,telMarks,sciMarks,socMarks,mathsMarks){
   this.firstName=firstName;
   this.lastName=lastName;
   this.engMarks=engMarks;
   this.hinMarks=hinMarks;
   this.telMarks=telMarks;
   this.sciMarks=sciMarks;
   this.socMarks=socMarks;
   this.mathsMarks=mathsMarks;


    console.log("Inside SSCStudent constructor");

    console.log(firstName,lastName,engMarks,hinMarks,telMarks,sciMarks,socMarks,mathsMarks);
 }

calculateResult = () => {
   console.log("inside calculate result");

   let passMarks = 35;
   if(this.engMarks>= passMarks &&
      this.hinMarks>= passMarks &&
      this.telMarks>= passMarks &&
      this.sciMarks>= passMarks &&
      this.socMarks>= passMarks &&
      this.mathsMarks>= passMarks 
   ) {
    console.log(`${this.firstName} passed in tenth`);
    }else{
      console.log(`${this.firstName} failed in tenth`);


    }
};

}

export default SSCStudent;