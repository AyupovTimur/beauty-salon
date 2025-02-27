import OurWorks from "../../components/ourWorks/OurWorks";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import { Helmet } from "react-helmet";

const MyWorksPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Салон красоты 'Орхидея', работы косметолога Натальи, село Раевский Республики Башкортостан."
        />
        <meta
          name="keywords"
          content="Портфолио, работы косметолога, салон красоты, село Раевский, Республика Башкортостан, чистка лица, пирсинг, пилинг, косметология, косметолог Наталья"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Портфолио косметолога Натальи, салон красоты 'Орхидея', с. Раевский
          Республики Башкортостан"
        />
        <meta
          property="og:description"
          content="Салон красоты 'Орхидея', работы косметолога Натальи, село Раевский Республики Башкортостан."
        />
        <meta
          property="og:image"
          content="https://ddmoppqyfetpzrhqugru.supabase.co/storage/v1/object/sign/metaImg/metaImg.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZXRhSW1nL21ldGFJbWcuanBnIiwiaWF0IjoxNzQwNjQ0NDYxLCJleHAiOjQ4OTQyNDQ0NjF9.NTpQc3Vg_4-5JBaxTW7Fudqjfe00r5bk1xosSmV9irk"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:site_name"
          content="Cалон красоты 'Орхидея' в с. Раевский Республики Башкортостан"
        />
        <title>
          Портфолио косметолога Натальи, салон красоты 'Орхидея', с. Раевский
          Республики Башкортостан
        </title>
      </Helmet>
      <ErrorBoundary>
        <OurWorks />
      </ErrorBoundary>
    </>
  );
};

export default MyWorksPage;
