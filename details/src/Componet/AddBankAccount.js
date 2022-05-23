import React from 'react'


const AddBankAccount =()=>{
    return(
        <div class="row">
     <div class="container">
      <form>    
            <label for="fname"> Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Enter your name"/>

            <label for="adr"> Address</label>
            <input type="text" id="adr" name="address" placeholder="Enter your address"/>

            <label for="accnum">Account number</label>
            <input type="text" id="accnum" name="accountnumber" placeholder="1111-2222-3333-4444"/>

            <label for="ifsc">IFSC code</label>
            <input type="text" id="ifsc" name="ifsc" placeholder="Enter IFSC"/>

            <label for="bmicr">Branch MICR code</label>
            <input type="text" id="bmicr" name="branchmicr" placeholder="Enter Branch MICR"/>

            <label for="bgstin">Branch GSTIN</label>
            <input type="text" id="bgstin" name="branchgstin" placeholder="Enter Branch GSTIN"/>

            <label for="customernum">Customer number</label>
            <input type="text" id="customernum" name="customernumber" placeholder="Enter customer number"/>

            <label for="ptype"> Product Type</label>
            <input type="text" id="ptype" name="producttype" placeholder="Product Type"/>

            
            <label for="aobalance"> Account Opening Balance</label>
            <input type="text" id="aobalance" name="accountopeningbalance" placeholder="Account Opening Balance"/>


            <label for="date">Date</label>
            <input type="date" id="date" name="date"  placeholder="Choose date"/><br/><br/>

            <label for="edate">Effective Date</label>
            <input type="date" id="edate" name="effectivedate"  placeholder="Choose effective date"><br/><br/>

            <label for="branch"> Branch</label>
            <input type="text" id="branch" name="branch" placeholder="Enter Branch"/>

            <label for="description"> Description</label>
            <input type="text" id="description" name="description" placeholder="Add description"/>

            <label for="dammount">Deposite Ammount</label>
            <input type="text" id="dammount" name="Depositeammount" placeholder="Enter Despositing Ammount"/>

         <button>Add Account</button>
      </form>
      </div>
    </div>
    
    )
}