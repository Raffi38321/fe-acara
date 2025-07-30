import AuthLayout from "@/components/layouts/AuthLayout";
import authServices from "@/services/auth";
import Activation from "../../../components/views/activation/Activation";

interface PropTypes {
  status: "success" | "failed";
}

const AcctivationPage = (props: PropTypes) => {
  return (
    <AuthLayout title="acara | activation">
      <Activation {...props} />
    </AuthLayout>
  );
};

export async function getServerSideProps(context: { query: { code: string } }) {
  try {
    const result = await authServices.activation({ code: context.query.code });
    console.log(result.data.data);
    if (result.data.data) {
      return {
        props: {
          status: "success",
        },
      };
    } else {
      return {
        props: {
          status: "failed",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        status: "failed",
      },
    };
  }
}

export default AcctivationPage;
