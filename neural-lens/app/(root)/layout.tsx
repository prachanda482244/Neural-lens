import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default layout;
