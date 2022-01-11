import React from "react";
import { Button } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./index.module.scss";
function User() {
  const [params, _] = useSearchParams();
  console.log("params", params.get("qq"));

  return (
    <div>
      User
      <ol>
        <li>
          <Link to="/user/detail/1">用户1</Link>
        </li>
        <li>
          <Link to="/user/detail/2">用户2</Link>
        </li>
        <li>
          <Link to="/user/detail/3">用户3</Link>
        </li>
        <li>
          <Link to="/user/detail/4">用户4</Link>
        </li>
      </ol>
    </div>
  );
}

export default User;
