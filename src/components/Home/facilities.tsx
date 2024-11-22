import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
const Facilities = () => {
  return (
    <div className="bg-facilities opacity-90">
      <div className="container mx-auto pt-5">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div className="flex gap-4">
              <div>
                <FaShippingFast className="text-white text-[32px]" />
              </div>
              <div>
                <p className="text-[19px] text-white font-semibold">
                  FREE SHIPPING
                </p>
                <p className="text-[13px] text-white font-normal">
                  BUY BDT 3000+ & GET FREE DELIVERY
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <div>
                <RiExchangeDollarLine className="text-white text-[32px]" />
              </div>
              <div>
                <p className="text-[19px] text-white font-semibold">
                  7 DAYS EXCHANGE
                </p>
                <p className="text-[13px] text-white font-normal">
                  EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <div>
                <MdPayment className="text-white text-[32px]" />
              </div>
              <div>
                <p className="text-[19px] text-white font-semibold">
                100% PAYMENT SECURE
                </p>
                <p className="text-[13px] text-white font-normal">
                  CASH ON DELIVERY AND SECURED ONLINE PAYMENT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
