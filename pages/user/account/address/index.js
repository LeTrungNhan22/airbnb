import React from "react";
import BreadCrumb from "../../../../components/BreadCrumb";
import Layout from "../../../../components/Layout";
import SideBar from "../../../../components/user-profile/SideBar";
import UserAddress from "../../../../components/user-profile/UserAddress";

const UserAddressScreen = () => {
  return (
    <Layout title={`Profile`}>
      <div className="bg-gray-300">
        <BreadCrumb title={`Profile`} />
        <div className="w-[1200px] grid grid-cols-12 items-start gap-6 pt-4 pb-16 mx-auto">
          {/* sidebar */}
          <div className="col-span-3">
            <SideBar />
          </div>
          {/* sidebar */}

          {/* profile info */}
          <div class="col-span-9 gap-4 mt-6 lg:mt-0 bg-white">
            <UserAddress />
          </div>
          {/* profile info */}
        </div>
      </div>
    </Layout>
  );
};

export default UserAddressScreen;
