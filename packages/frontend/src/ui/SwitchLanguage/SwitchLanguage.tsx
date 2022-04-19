import React, { Fragment, useState } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import i18nConfig from '../../../i18n.json';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router'

export interface SwitchDarkModeProps {
  className?: string;
}
const SwitchDarkMode: React.FC<any> = ({ className = "" }) => {
  const router = useRouter()
  const { locales, defaultLocale } = i18nConfig;
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLocale);
  const { locale } = router;

  const { t, lang } = useTranslation('common');
  const translate = (lang: any) => {
    setSelectedLanguage(lang);
    if (lang == "ar") {
      document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
      document.getElementsByTagName('body')[0].setAttribute("dir", "rtl");
    } else {
      document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
      document.getElementsByTagName('body')[0].setAttribute("dir", "ltr");
    }
  }
  return (
    <div className="flex">
      <Listbox value={selectedLanguage} onChange={translate}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{t('language')} : {selectedLanguage}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {locales.map((lng, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={lng}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${selected ? 'font-medium' : 'font-normal'
                          } block truncate`}
                      >
                        <Link href={router.asPath} locale={lng} key={lng}>
                          {lng}
                        </Link>
                      </span>
                      {selected ? (
                        <span
                          className={`${active ? 'text-amber-600' : 'text-amber-600'
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default SwitchDarkMode;