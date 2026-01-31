import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export default function AdminRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      const role =
        session.user.user_metadata?.role ||
        session.user.app_metadata?.role;

      setAuthorized(role === "admin");
      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) return null;

  return authorized ? children : <Navigate to="/admin" replace />;
}
