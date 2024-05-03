"use client";
/* CountUp只能在client-side渲染 */
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimal="," decimals={2} prefix="HKD$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
