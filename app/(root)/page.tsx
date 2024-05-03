import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Legiana",
    lastName: "Hui",
    email: "legiana@example.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="歡迎,"
            user={loggedIn?.firstName || "訪客"}
            subtext="更有效率存取及管理您的銀行賬戶"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={1350.35}
          />
        </header>
        RESENT TRANSATIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1350.35 }, { currentBalance: 1200.5 }]}
      />
    </section>
  );
};

export default Home;
