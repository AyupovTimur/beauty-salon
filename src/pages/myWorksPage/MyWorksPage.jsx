import OurWorks from "../../components/ourWorks/OurWorks";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";

const MyWorksPage = () => {
  return (
    <>
      <ErrorBoundary>
        <OurWorks />
      </ErrorBoundary>
    </>
  );
};

export default MyWorksPage;
