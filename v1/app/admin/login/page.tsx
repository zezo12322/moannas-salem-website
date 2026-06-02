import { loginAdmin as _loginAdmin } from "@/app/actions/admin-auth";
import LoginForm from "./LoginForm";

// Server Component — importing loginAdmin ensures it appears in the server-side
// action manifest at build time. LoginForm also imports it directly for useActionState.
export default function AdminLoginPage() {
  return <LoginForm />;
}
