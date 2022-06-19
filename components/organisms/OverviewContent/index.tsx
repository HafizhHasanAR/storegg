import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category
                nominal={1800500}
                icon="Ic-destop"
                children1="Game"
                children2="Desktop"
              />
              <Category
                nominal={8455000}
                icon="Ic-mobile"
                children1="Game"
                children2="Mobile"
              />
              <Category
                nominal={5000000}
                icon="Ic-destop"
                children1="Other"
                children2="Categories"
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="League of Legends"
                  category="Desktop"
                  item={200}
                  price={290000}
                  image="overview-1"
                  status="Pending"
                />
                <TableRow
                  title="Call of Duty"
                  category="Desktop"
                  item={550}
                  price={740000}
                  image="overview-2"
                  status="Success"
                />
                <TableRow
                  title="Clash of Clans"
                  category="Mobile"
                  item={100}
                  price={120000}
                  image="overview-3"
                  status="Failed"
                />
                <TableRow
                  title="The Royal Game"
                  category="Mobile"
                  item={225}
                  price={200000}
                  image="overview-4"
                  status="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
