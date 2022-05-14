// import Intro from 'modules/landing/components/Intro';
import Layout from 'ui/Layout/Layout';
import SocialsList from 'ui/SocialsList';
import Label from 'ui/Label';
import Input from 'ui/Input';
import ButtonPrimary from 'ui/Button/ButtonPrimary';
import Textarea from 'ui/Textarea';
import client from 'utils/axios'
import { useQuery } from 'react-query'
import { useForm } from "react-hook-form";

// import SEO from 'ui/SEO';
// import { VariantTypes } from 'ui/uiTypes';

async function fetchContact() {
  const { data } = await client.get('contact');
  return data
}
async function sendEmail(payload:any) {
  const { data } = await client.post('contact',payload);
  return data
}
const Index = (className: any) => {
  const { isLoading, isError, data, error } = useQuery('properties', fetchContact);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async(data:any) => {
    const response  = await sendEmail(data);
    console.log(response)
  };
  return (
    <Layout >
      {/* <SEO title="Contact || Booking React Template" description="" /> */}
      {/* <RealEstate className="lg:mt-2"></RealEstate> */}
      <div
        className={`nc-PageContact overflow-hidden ${className}`}
        data-nc-id="PageContact"
      >

        <div className="mb-24 lg:mb-32">
          <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            Contact
          </h2>
          <div className="container max-w-7xl mx-auto">
            <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
              <div className="max-w-sm space-y-8">
               <div>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🗺 ADDRESS
                  </h3>
                  {data && data.addresses.map((address:string, index:number) => (
                  <div key={index}>
                    <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                      {address}
                    </span>
                  </div>
                ))}
                </div>
                <div>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  💌  Email
                  </h3>
                  {data && data.emails.map((email:string, index:number) => (
                  <div key={index}>
                    <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                      {email}
                    </span>
                  </div>
                ))}
                </div>
                <div>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  ☎ PHONE
                  </h3>
                  {data && data.phones.map((phone:string, index:number) => (
                  <div key={index}>
                    <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                      {phone}
                    </span>
                  </div>
                ))}
                </div>
                <div>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    🌏 SOCIALS
                  </h3>
                  {data && <SocialsList socials={data?.socials} className="mt-2" />}
                </div>
              </div>
              <div>
                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit(onSubmit)}>
                  <label className="block">
                    <Label>Full name</Label>
  
                    <Input
                      placeholder="Mohammed Mohammed"
                      type="text"
                      className="mt-1"
                      {...register("fullname")}
                    />
                  </label>
                  <label className="block">
                    <Label>Email address</Label>

                    <Input
                      type="email"
                      placeholder="example@example.com"
                      className="mt-1"
                      {...register("email")}
                    />
                  </label>
                  <label className="block">
                    <Label>Message</Label>

                    <Textarea className="mt-1" rows={6}   {...register("message")}/>
                  </label>
                  <div>
                    <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER SECTIONS */}
        {/* <div className="container">
          <div className="relative py-16">
            <BackgroundSection />
            <SectionClientSay uniqueClassName="Pagecontact_" />
          </div>
          <SectionSubscribe2 className="py-24 lg:py-32" />
        </div> */}
      </div>
    </Layout>
  );
}

export default Index;
