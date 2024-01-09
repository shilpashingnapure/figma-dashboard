import "./content.component.scss";
function Content() {
  const data = [
    {
      orderId: "#281209",
      orderDate: "7 July , 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July , 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July , 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July , 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July , 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    }
  ];
  return (
    <div className="content">
      <div className="header-section">
        <div>
          Payments
          <small>
            <img src="images/Help.svg" alt=""/>
            How it works
          </small>
        </div>
        <div className="search-input">
          <img src="images/search.png" alt="no img" />
          <input type="text" placeholder="Search features, tutorials, etc." />
        </div>
        <div className="header-icons">
          <div>
            <img src="images/chat-icon.png" alt="" />
          </div>
          <div>
            <img src="images/down-arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div className="overview-section">
        <div className="overview-header">
          <h3 className="heading">Overview</h3>
          <div>
            <img src="./images/btn.svg" alt=""/>
          </div>
        </div>

        <div className="overview-content">
          <div>
            <span>Online orders</span>
            <h3>231</h3>
          </div>
          <div>
            <span>Amount received</span>
            <h3>₹23,92,312.19</h3>
          </div>
        </div>
      </div>
      <div className="transaction-section">
        <h3 className="heading">Transactions | This Month</h3>
        <div>
          <div className="filter-section">
            <div className="search-input">
              <img src="./images/search.png" alt="" />
              <input type="text" placeholder="Search by order ID..." />
            </div>
            <div className="btns">
              <img src="./images/Sort.svg" alt="" />
              <img src="./images/download.svg" alt=""/>
            </div>
          </div>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th className="flex">
                    Order date{" "}
                    <img src="/images/down-arrow.png" width="10px" alt="" />
                  </th>
                  <th>Order amount</th>
                  <th className="flex">
                    Transaction fees <img src="/images/Info.svg" alt="" />
                  </th>
                </tr>
              </thead>
              <tbody>

                {
                    data.map((element , index) => {
                       return  <tr key={index}>
                            <td>{ element.orderId}</td>
                            <td>{element.orderDate}</td>
                            <td>₹{element.orderAmount}</td>
                            <td>₹{element.transactionFees}</td>
                        </tr>
                        
                    })
                }
              </tbody>
            </table>
            <div className="table-btn">
                <div className="button">
                <img src="./images/left-arrow.svg" alt=""/>

                   <span>Previous</span> 
                </div>
                <div className="page-num">
                    <span className="active-pagination">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    </div>
                <div className="button">
                    <span>Next</span>
                    <img src="./images/right-arrow.svg" alt=""/>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
