import BeautyMasters from "../../components/beautyMasters/BeautyMasters";
import { Helmet } from "react-helmet";

const AboutMePage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Салон красоты 'Орхидея', косметолог Наталья, село Раевский Республики Башкортостан."
        />
        <meta
          name="keywords"
          content="Салон красоты, село Раевский, Республика Башкортостан, чистка лица, пирсинг, пилинг, косметология, косметолог Наталья"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:title"
          content="Косметолог Наталья в салоне красоты 'Орхидея', с. Раевский Республики
          Башкортостан"
        />
        <meta
          property="og:description"
          content="Салон красоты 'Орхидея', косметолог Наталья, село Раевский Республики Башкортостан."
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
          Косметолог Наталья в салоне красоты 'Орхидея', с. Раевский Республики
          Башкортостан
        </title>
      </Helmet>
      <BeautyMasters />
    </>
  );
};
export default AboutMePage;
