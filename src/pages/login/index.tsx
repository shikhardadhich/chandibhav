import { Meta } from "../../layout/Meta";
import { Login } from "../../login/Login";
import { Header } from "../../templates/Header";
import { AppConfig } from "../../utils/AppConfig";

const LoginPage = () => {
  return (
    <section className="h-screen">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header></Header>
      <Login></Login>
    </section>
  );
};
export default LoginPage;
