import React from 'react';
import { CashIcon, StarIcon, StatusOnlineIcon, HeartIcon } from '@heroicons/react/outline'

const features = [
    {
      name: '24/7 Family Like Care',
      description:
        'We give care and proper treatment to our patient 24/7, we treat every patient as a family memeber.',
      icon: HeartIcon,
    },
    {
      name: 'Best Professionals From All Over The World',
      description:
        'We have one of the finest professional doctors from all over the world, treating and helping thousands of our patients everyday with great care.',
      icon: StarIcon,
    },
    {
      name: 'Active Online Support',
      description:
        'We have a full team of medical professionals working remotely for the people in the rural areas. Also there are lot of consultations going on through our live on site support.',
      icon: StatusOnlineIcon,
    },
    {
      name: 'No Hidden Charge',
      description:
        'We are crystal clear about all of our medical charges and bills beforehand. Here you will never face any hidden charges.',
      icon: CashIcon,
    },
  ]

const WhyNewLife = () => {
    return (
        <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-rose-500 font-semibold tracking-wide uppercase">We Care</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Should You Choose New Life Hospital?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Because we care about you and treat you like a family here.
            </p>
          </div>
  
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-rose-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
};

export default WhyNewLife;