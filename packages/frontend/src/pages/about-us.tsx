// import Intro from 'modules/landing/components/Intro';
import Layout from "ui/Layout/Layout";
import SocialsList from "ui/SocialsList";
import Label from "ui/Label";
import Input from "ui/Input";
import ButtonPrimary from "ui/Button/ButtonPrimary";
import Textarea from "ui/Textarea";
import client from "utils/axios";
// import { useQuery } from 'react-query'
// import { useForm } from "react-hook-form";

// import SEO from 'ui/SEO';
// import { VariantTypes } from 'ui/uiTypes';

// async function fetchContact() {
//   const { data } = await client.get('contact');
//   return data
// }
// async function sendEmail(payload:any) {
//   const { data } = await client.post('contact',payload);
//   return data
// }
const Index = ({className}: any) => {
  //   const { isLoading, isError, data, error } = useQuery('properties', fetchContact);
  //   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //   const onSubmit = async(data:any) => {
  //     const response  = await sendEmail(data);
  //     console.log(response)
  //   };
  return (
    <Layout>
      {/* <SEO title="Contact || Booking React Template" description="" /> */}
      {/* <RealEstate className="lg:mt-2"></RealEstate> */}
      <div
        className={`nc-PageContact overflow-hidden ${className} h-screen`}
        data-nc-id="PageContact"
      >
        <div>
          <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            About us
          </h2>
          <div className="container mx-auto">
            <div className="">
              <div className="container mx-auto lg:px-12 sm:px-5">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="p-3 bg-white shadow rounded-lg px-5 py-6">
                    <img
                      src="https://i.imgur.com/gvNYKAh.png"
                      width="50"
                      className="mb-3"
                    />

                    <span className="font-bold text-xl">
                      Construction
                    </span>

                    <p className="mt-2 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <a
                      href="#"
                      className="flex flex-row items-center mt-3 text-blue-600 hover:text-blue-800"
                    >
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>

                  <div className="p-3 bg-white shadow rounded-lg px-5 py-6">
                    <img
                      src="https://i.imgur.com/qtIK04u.png"
                      width="50"
                      className="mb-3"
                    />

                    <span className="font-bold text-xl">Renovation</span>

                    <p className="mt-2 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <a
                      href="#"
                      className="flex flex-row items-center mt-3 text-blue-600 hover:text-blue-800"
                    >
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>

                  <div className="p-3 bg-white shadow rounded-lg px-5 py-6">
                    <img
                      src="https://i.imgur.com/7IPu6pH.png"
                      width="50"
                      className="mb-3"
                    />

                    <span className="font-bold text-xl">
                      Visible achievement
                    </span>

                    <p className="mt-2 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <a
                      href="#"
                      className="flex flex-row items-center mt-3 text-blue-600 hover:text-blue-800"
                    >
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-9 text-center  bg-primary-500">
                <h2 className="font-semibold text-sm md:text-sm xl:text-sm !leading-[110%] text-white">5 years of experience</h2>
      </div>
      <div className="container">
        <div id="features">

        </div>
      </div>
    </Layout>
  );
};

export default Index;
