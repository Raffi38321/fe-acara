import DashboardLayout from "@/components/layouts/DashBoardLayout";
import Dashboard from "@/components/views/Member/Dashboard";

const DashboardMemberPage = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      description="Dashboard member"
      type="member"
    >
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardMemberPage;
