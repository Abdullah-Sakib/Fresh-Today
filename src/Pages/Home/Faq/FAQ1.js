import React from "react";
import Item from "./Item/Item";
import "./FAQ1.css";

const FAQ1 = () => {
  return (
    <div>
      <div className="lg:mx-20 mx-5 font-family relative flex flex-col min-w-0 break-words bg-white   rounded-2xl bg-clip-border mt-16 md:mt-28 lg:mt-20">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
              <div className="flex flex-col h-full">
                <h2 className="text-center font-bold text-slate-800 text-4xl font-family my-5">
                  {" "}
                  Some Commonly Asked Questions About Us
                </h2>
                <div className="space-y-4 mx-auto">
                  <Item title="CAN I USE COUPONS ON MY GROCERY SHOPPING AND DELIVERY ORDER?">
                    Most of our independently owned and operated Fresh Today.com
                    location accept coupons to use for your purchase, however it
                    will be necessary for us to pick up your coupons prior to
                    shopping for your groceries and there may be an additional
                    charge to pick up the coupons from you, unless you have
                    provided them during the delivery of a previous order. To
                    determine if coupon pick-up is provided and if there is an
                    additional charge for this service, please call your local
                    FreshToday.com location first or navigate to the order
                    information page of your local FreshToday.com location via
                    our Grocery Delivery Areas link.
                  </Item>
                  <Item
                    className="text-center"
                    title="HOW SPECIFIC DO I HAVE TO BE ON MY GROCERY LIST?"
                  >
                    Because we want you to be satisfied with your experience of
                    using Fresh Today, we ask that you be as specific as
                    possible with your grocery list. With millions of individual
                    grocery items available, product description, when
                    necessary, is important. We want to be sure that we get it
                    right for you for the first time and every time! Please be
                    sure to read our substitution policy on the next line.
                  </Item>
                  <Item title="WHAT ARE YOUR SHOP AND DELIVERY HOURS?">
                    The Fresh Today shopping and delivery hours are dependent
                    upon the independently owned and operated FreshToday.com
                    location that services your city. Please visit the Grocery
                    Delivery Areas page and navigate to your delivery city for
                    further information.
                  </Item>
                  <Item title="CAN I CHANGE OR CANCEL MY DELIVERY TIME AFTER I HAVE PLACED MY ORDER?">
                    In most cases yes. You must contact your local Fresh Today
                    provider directly to make the change. You should call at
                    least 3 hours before the scheduled delivery time. Sending an
                    email may not be sufficient enough to stop your grocery
                    order from being processed.
                  </Item>
                </div>
              </div>
            </div>

            <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none space-y-4 mx-auto">
              <div className="h-full rounded-xl">
                <div className="relative flex items-center justify-center h-full">
                  <img
                    className="relative z-20 w-full pt-6"
                    src="https://djmdigital.be/wp-content/uploads/2022/04/online-communication.jpg"
                    alt="rocket"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ1;
