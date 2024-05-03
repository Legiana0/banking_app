import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

//TotalBalanceBoxProps interface => types/index.d.ts
const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">銀行賬戶︰ {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">目前餘額總額</p>

          <div className="total-balance-amount flex-center gap-2">
            {/* CountUp只能在client-side渲染 */}
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
