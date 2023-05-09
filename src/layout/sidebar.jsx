import React from 'react'

export default function SideBar() {
  return (
    <nav className="sidebar">
       <div className="text">eBazar</div>

       <ul>
        <li><a href="#">Dashboard</a></li>
        <li>
            <a href="#" className="prod-btn">Products 
                
                <span className="fas fa-caret-down first" ></span>
        </a>
               
            <ul className="prod-show">
                <li><a href="#">Product Gird</a></li>
                <li><a href="#">Product List</a></li> 
                <li><a href="#">Product Edit</a></li>
                <li><a href="#">Product Details</a></li>
                <li><a href="#">Product add</a></li> 
                <li><a href="#">shopping Cart</a></li>
                <li><a href="#">Checkout</a></li>
        
       </ul>
       </li>
       <li>
        <a href="#" className="cate-btn">Categories 
            <span className="fas fa-caret-down second"></span>
        </a>
        <ul className="cate-show">
            <li><a href="#">categories List</a></li>
            <li><a href="#">categories Edit</a></li> 
            <li><a href="#">categories Add</a></li>
           
   </ul>
   </li>
   <li>
    <a href="#" className="orde-btn">Orders
        <span className="fas fa-caret-down third"></span>
    </a>
    <ul className="orde-show">
        <li><a href="#">Order List</a></li>
        <li><a href="#">Order Details</a></li> 
        <li><a href="#">Order invoices</a></li>

    </ul>
</li>

<li>
    <a href="#" className="cust-btn" >Customers 
        <span className="fas fa-caret-down fourth"></span>
    </a>
    <ul className="cust-show">
        <li><a href="#">Customers list</a></li>
        <li><a href="#">Customers Detiels</a></li> 
        

    </ul>
</li>
        <li>
    <a href="#" className="prom-btn">Sales Promotion 
        <span className="fas fa-caret-down fifth"></span>
    </a>
    <ul className="prom-show">
        <li><a href="#">Coupons List</a></li>
        <li><a href="#">Coupons add</a></li> 
        <li><a href="#">Coupons Edit</a></li> 

    </ul>
</li>


<li>

    <a href="#" className="inve-btn">Inventory
        <span className="fas fa-caret-down sixth"></span>
    </a>
    <ul className="inve-show">
        <li><a href="#">Stock List</a></li>
        <li><a href="#">Purchase</a></li> 
        <li><a href="#">Supplier</a></li> 
        <li><a href="#">Returns</a></li> 
        <li><a href="#">Department</a></li> 
       

    </ul>
</li>
    
<li>

    <a href="#" className="acco-btn">Accounts
        <span className="fas fa-caret-down seventh"></span>
    </a>
    <ul className="acco-show">
        <li><a href="#">invoices</a></li>
        <li><a href="#">Expenses</a></li> 
        <li><a href="#">Salary Slip</a></li> 
        

    </ul>
</li>

<li>

    <a href="#" className="app-btn">App
        <span className="fas fa-caret-down eighht"></span>
    </a>
    <ul  className="app-show">
        <li><a href="#">Calandar</a></li>
        <li><a href="#">Chat App</a></li> 
        
        

    </ul>
</li>

      <li><a href="#">Store Locator</a></li>
      <li><a href="#">Stater page</a></li>
  

      <li>

        <a href="#" className="uico-btn">UI Components
            <span className="fas fa-caret-down nineth"></span>
        </a>
        </li>
        <ul  className="uico-show">
            <li><a href="#">Alerts</a></li>
            <li><a href="#">Badge</a></li> 
            <li><a href="#">Breadcrumb</a></li>
            <li><a href="#">Buttons</a></li> 
            <li><a href="#">Card</a></li>
            <li><a href="#">Carousel</a></li> 
            <li><a href="#">Collapse</a></li>
            <li><a href="#">Dropdowns</a></li> 
            <li><a href="#">List group</a></li>
            <li><a href="#">Model</a></li> 
            <li><a href="#">Navs</a></li>
            <li><a href="#">Navbar</a></li> 
            <li><a href="#">Pagination</a></li>
            <li><a href="#">Popovers</a></li> 
            <li><a href="#">Progess</a></li>
            <li><a href="#">Scrollspy</a></li> 
            <li><a href="#">Snippers</a></li>
            <li><a href="#">Model</a></li> 
            <li><a href="#">Navs</a></li>
            <li><a href="#">Navbar</a></li> 
            <li><a href="#">Toasts</a></li>
            <li><a href="#">Tooltips</a></li> 
        </ul>
            <li>
            
        

                <a href="#" className="auth-btn">Authentication
                    <span className="fas fa-caret-down tenth"></span>
                </a>
                <ul  className="auth-show">
                    <li><a href="#">Sign in</a></li>
                    <li><a href="#">Sign up</a></li> 
                    <li><a href="#">Password reset</a></li>
                    <li><a href="#">2-Step Authentication</a></li> 
                    <li><a href="#">404</a></li>

                    
            
                </ul>
            </li>




            <li>
            
        

                <a href="#" className="othe-btn">Other pages
                    <span className="fas fa-caret-down tenth"></span>
                </a>
                <ul  className="othe-show">
                    <li><a href="#">Profile Page</a></li>
                    <li><a href="#">Price Plan Example</a></li> 
                    <li><a href="#">Charts Example</a></li>
                    <li><a href="#">Table Example</a></li> 
                    <li><a href="#">Forms Example</a></li>
                    <li><a href="#">icons</a></li>
                    <li><a href="#">Contact Us</a></li> 
                    <li><a href="#">Todo List</a></li>


                    
            
                </ul>
            </li>
            
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Changelog</a></li>


   </ul>
    </nav>
  )
}
