
import { Meta } from '../../layout/Meta'
import { Login } from '../../login/Login'
import { AppConfig } from '../../utils/AppConfig'

const LoginPage = () => {
  return (
    <section className="h-screen">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Login></Login>
    </section>
  )
}
export default LoginPage
