import Footer from "./Footer";
import Profile from "./profile";
import Image from "next/image";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu: "overview" | "transaction" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="Ic-Menu-Overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transaction"
            icon="Ic-Menu-Transaction"
            active={activeMenu === "transaction"}
            href="/member/transactions"
          />
          <MenuItem title="Messages" icon="Ic-Menu-Messages" href="/member" />
          <MenuItem title="Card" icon="Ic-Menu-Card" href="/member" />
          <MenuItem title="Rewards" icon="Ic-Menu-Rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="Ic-Menu-Settings"
            active={activeMenu === "settings"}
            href="/member/edit-profile"
          />
          <MenuItem
            title="Log Out"
            icon="Ic-Menu-LogOut"
            href="/member/sign-in"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
