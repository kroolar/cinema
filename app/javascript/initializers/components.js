import { Toast } from "../components"
import Menu from "../components/Menu"
import Dashboard from "../pages/dashboard"
import SignIn from "../pages/devise/signIn"

// Entrypoint to load components to the application
const COMPONENTS = {
  dashboard: Dashboard,
  signIn: SignIn,
  toast: Toast,
  menu: Menu
}

export default COMPONENTS
