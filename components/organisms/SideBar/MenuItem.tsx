import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  href: string;
  icon:
    | "Ic-Menu-Overview"
    | "Ic-Menu-Transaction"
    | "Ic-Menu-Messages"
    | "Ic-Menu-Card"
    | "Ic-Menu-Rewards"
    | "Ic-Menu-Settings"
    | "Ic-Menu-LogOut";
  active?: boolean;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, href, active } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} alt="icon" width={25} height={25} />
      </div>

      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
