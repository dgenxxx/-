import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SettlementList } from "./settlement/SettlementList";
import { SettlementCreate } from "./settlement/SettlementCreate";
import { SettlementEdit } from "./settlement/SettlementEdit";
import { SettlementShow } from "./settlement/SettlementShow";
import { OfficeList } from "./office/OfficeList";
import { OfficeCreate } from "./office/OfficeCreate";
import { OfficeEdit } from "./office/OfficeEdit";
import { OfficeShow } from "./office/OfficeShow";
import { CarList } from "./car/CarList";
import { CarCreate } from "./car/CarCreate";
import { CarEdit } from "./car/CarEdit";
import { CarShow } from "./car/CarShow";
import { CourierList } from "./courier/CourierList";
import { CourierCreate } from "./courier/CourierCreate";
import { CourierEdit } from "./courier/CourierEdit";
import { CourierShow } from "./courier/CourierShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CourierService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Settlement"
          list={SettlementList}
          edit={SettlementEdit}
          create={SettlementCreate}
          show={SettlementShow}
        />
        <Resource
          name="Office"
          list={OfficeList}
          edit={OfficeEdit}
          create={OfficeCreate}
          show={OfficeShow}
        />
        <Resource
          name="Car"
          list={CarList}
          edit={CarEdit}
          create={CarCreate}
          show={CarShow}
        />
        <Resource
          name="Courier"
          list={CourierList}
          edit={CourierEdit}
          create={CourierCreate}
          show={CourierShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
