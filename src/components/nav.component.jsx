import "./nav.component.scss";
function Navbar() {
  return (
    <div className="nav">
      <div className="header">
        <div className="logo">
          <div>
            <img src="./images/logo.svg" alt="" />
            <div>
              <h4>Nishyan</h4>
              <span>Visit store</span>
            </div>
          </div>
          <img src="./images/down-outline-arrow.svg" alt="" width='15px' height='15px'/>
        </div>
        <ul>
          <li>
            <img src="./icons/home.svg" alt="" />
            <span>Home</span>
          </li>
          <li>
            <img src="./icons/orders.svg" alt="" />
            <span>Orders</span>
          </li>
          <li>
            <img src="./icons/product.svg" alt="" />
            <span>Products</span>
          </li>
          <li>
            <img src="./icons/delivery.svg" alt="" />
            <span>Delivery</span>
          </li>
          <li>
            <img src="./icons/marketing.svg" alt="" />
            <span>Marketing</span>
          </li>
          <li>
            <img src="./icons/analytics.svg" alt="" />
            <span>Analytics</span>
          </li>
          <li className="active">
            <img src="./icons/payments.svg" alt="" />
            <span>Payments</span>
          </li>
          <li>
            <img src="./icons/tools.svg" alt="" />
            <span>Tools</span>
          </li>
          <li>
            <img src="./icons/discount.svg" alt="" />
            <span>Discounts</span>
          </li>
          <li>
            <img src="./icons/audience.svg" alt="" />
            <span>Audience</span>
          </li>
          <li>
            <img src="./icons/appearance.svg" alt="" />
            <span>Appearance</span>
          </li>
          <li>
            <img src="./icons/plugins.svg" alt="" />
            <span>Plugins</span>
          </li>
        </ul>
      </div>
      <div className="footer">
        <div>
          <img src="./icons/wallet.svg" alt="" />
        </div>
        <div>
          <span>Available creadits</span>
          <h3>222.10</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
