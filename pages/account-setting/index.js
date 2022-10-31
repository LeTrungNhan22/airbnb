import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

const AccountSettingScreen = () => {
  return (
    <Layout>
      <div>Account setting</div>
      <div>
        <Link href="/account-setting/user-profile">
          <a> user Profile</a>
        </Link>
      </div>
    </Layout>
  );
};

export default AccountSettingScreen;
