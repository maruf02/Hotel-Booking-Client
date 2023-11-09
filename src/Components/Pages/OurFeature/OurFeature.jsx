import React from "react";

const OurFeature = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Our Features
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-lime-500 md:text-4xl">
          Our Features Make your life easier and Luxurious
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-black md:grid-cols-3">
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Private Beach Access::
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Step directly onto the soft sands of our private beach, where
              guests have exclusive access to relax, swim, and soak up the sun
              in a secluded atmosphere.
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Infinity Pool with Ocean Views:
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Take a refreshing dip in our infinity pool that seamlessly blends
              with the horizon, offering panoramic views of the ocean for a
              truly immersive experience.
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Gourmet Seaside Dining
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Indulge in a culinary journey with our seaside restaurants,
              serving fresh, locally sourced ingredients, and offering a menu
              that captures the essence of coastal flavors.
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <a href="/pricing" className="group">
              <img
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Competitive Pricing:
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer competitive and transparent pricing. Our goal is to
                provide you with the best value for your investment. No hidden
                fees or surprises - just straightforward pricing.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <a href="/templates" className="group">
              <img
                src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Spa and Wellness Retreat:
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Rejuvenate your body and mind at our seaside spa, where expert
                therapists offer a range of treatments inspired by the healing
                powers of the ocean, promoting relaxation and wellness.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <a href="/download" className="group">
              <img
                src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Sunset Lounge and Bar:
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Unwind in style at our Sunset Lounge, where you can sip on
                handcrafted cocktails while witnessing breathtaking sunset views
                over the shimmering waters of the sea.
              </p>
            </a>
          </li>
        </ul>
      </div>

      {/*  */}

      {/*  */}
    </div>
  );
};

export default OurFeature;
