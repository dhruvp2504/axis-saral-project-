import React from "react";
import "./OurServices.css";
const OurServices = () => {
  return (
    <body class="ourSvBdy">
      <section class="articles">
        <h1 class="ourSvHead">Our Services</h1>
        <div class="features">
          {/* ITEM 1 */}
          <div class="item item1">
            <img
              class="item-photo"
              src="https://cdn.britannica.com/02/160902-050-B58BAD84/Credit-cards.jpg"
              alt=""
            />
            <div class="item-header">
              <ion-icon class="item-icon" name="bulb-outline"></ion-icon>
              <h3 class="item-title">Credit Card</h3>
            </div>
            <p class="item-text">
              E-Statements are electronic copies of your monthly credit card
              account statements that get delivered to your registered E-mail
              id. As a part of our Go-Green initiative we encourage our
              customers to opt for E-Statements.
            </p>
            {/* <a class="item-link" href="#">Click to see by yourself &rarr;</a> */}
          </div>
          {/* ITEM 2 */}

          <div class="item item1">
            <img
              class="item-photo"
              src="https://www.financialexpress.com/wp-content/uploads/2022/02/nps.jpg"
              alt=""
            />
            <div class="item-header">
              <ion-icon class="item-icon" name="bulb-outline"></ion-icon>
              <h3 class="item-title">National Pension Scheme</h3>
            </div>
            <p class="item-text">
              Opening of Individual Pension Account under NPS (only Tier I /
              Tier I & Tier II) by All Indian Citizens (including NRIs) between
              18 - 70 years
            </p>
            {/* <a class="item-link" href="#">Click to see by yourself &rarr;</a> */}
          </div>
          {/* ITEM 3 */}
          <div class="item item1">
            <img
              class="item-photo"
              src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/finance/what-is-education-loan-717x404.jpg"
              alt=""
            />
            <div class="item-header">
              <ion-icon class="item-icon" name="bulb-outline"></ion-icon>
              <h3 class="item-title">Education Loan</h3>
            </div>
            <p class="item-text">
              Axis Bank brings you Education Loans for studies both in India and
              abroad starting from Rs. 50,000 at attractive interest rates
            </p>
            {/* <a class="item-link" href="#">Click to see by yourself &rarr;</a> */}
          </div>

          {/* ITEM 4 */}
          <div class="item item2">
            <img
              class="item-photo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavyafL9gqENXnim4ZkdYK1LxF1oMqxgsshg&usqp=CAU"
              alt=""
            />
            <div class="item-header">
              <ion-icon class="item-icon" name="wallet-outline"></ion-icon>
              <h3 class="item-title">Debit Card</h3>
            </div>
            <p class="item-text">
              Shop what you need with Axis Bank. There is a lot on Grab Deals,
              from groceries to movie tickets to flight tickets. These offers
              are spread across brands and if you are an Internet Banking or
              Mobile Banking customer, you have an added advantage on the deals
              and online offers.
            </p>
            {/* <a class="item-link" href="#">Click to see by yourself &rarr;</a> */}
          </div>

          {/* ITEM 5 */}
          <div class="item item3">
            <img
              class="item-photo"
              src="https://bankofmaharashtra.in/writereaddata/loans/img/sp-purple-savings-account.jpg"
              alt=""
            />
            <div class="item-header">
              <ion-icon class="item-icon" name="wallet-outline"></ion-icon>
              <h3 class="item-title">Account Details</h3>
            </div>
            <p class="item-text">
              Each Savings Account offers unique features . The offers and
              discounts for savings account holders range from Axis eDGE rewards
              to emergency travel allowances and a lot more
            </p>
            {/* <a class="item-link" href="#">Click to see by yourself &rarr;</a> */}
          </div>
          <div class="item item3">
            <img
              class="item-photo"
              src="https://i.ytimg.com/vi/IbrxsqLC7sg/mqdefault.jpg"
              alt=""
            />
            {/* ITEM 6 */}
            <div class="item-header">
              <ion-icon
                class="item-icon"
                name="chatbubble-ellipses-outline"
              ></ion-icon>
              <h3 class="item-title">Loan Account</h3>
            </div>
            <p class="item-text">
              We believe your journey should continue without any speed bumps.
              This is why we bring you customized Bank Loans at competitive
              interest rates. To get started, check your loan eligibility using
              our simple loan calculators.
            </p>
          </div>
        </div>
      </section>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </body>
  );
};

export default OurServices;
