import React, { useState, useEffect } from "react";

import Login from "./Login";
import { login, jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return (
    <div>
      <div>JWT: {token}</div>
      <Login />
    </div>
  );
}
