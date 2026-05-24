import { loginAdmin } from "@/app/actions/admin-auth";
import LoginForm from "./LoginForm";

// Server Component — imports loginAdmin so it's in the server action registry.
// Passes it as a prop to the Client Component; this is the canonical pattern
// for avoiding "Failed to find Server Action" in production builds.
export default function AdminLoginPage() {
  return <LoginForm action={loginAdmin} />;
}
