import './CompaniesBanner.scss';

import { Banner } from '../Banner/Banner';
import { BodyText } from '../BodyText/BodyText';
import { ContentLiftup } from '../ContentLiftup/ContentLiftup';
import Element from '../Element/Element';
import { Image } from '../Image/Image';
import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import React from 'react';

const partners = [
  {
    image: { name: 'uoh_centre.svg', alt: 'Helsingin yliopisto' },
    url: 'https://www.helsinki.fi/',
  },
  {
    image: { name: 'houston.svg', alt: 'Houston inc.' },
    url: 'https://www.houston-inc.com/careers',
  },
  {
    image: { name: 'terveystalo.svg', alt: 'Terveystalo' },
    url: 'https://www.terveystalo.com/',
  },
  {
    image: { name: 'elisa.svg', alt: 'Elisa' },
    url: 'https://corporate.elisa.fi/rekrytointi/',
  },
  {
    image: { name: 'kesko.svg', alt: 'Kesko' },
    url: 'https://www.kesko.fi/',
  },
  {
    image: { name: 'unity.svg', alt: 'Unity' },
    url: 'https://www.instagram.com/unitytechnologies/?hl=en',
  },
  {
    image: { name: 'konecranes.svg', alt: 'Konecranes' },
    url: 'https://careers.konecranes.com/Konecranes/',
  },
];

const inChallenge = [
  {
    name: 'tivia.svg',
    alt: 'Tivia',
  },
  {
    name: 'relex.svg',
    alt: 'Relex',
  },
  {
    name: 'smartly.svg',
    alt: 'Smartly.io',
  },
  {
    name: 'eficode.svg',
    alt: 'Eficode',
  },
  {
    name: 'sympa.svg',
    alt: 'Sympa',
  },
  {
    name: 'cinia.svg',
    alt: 'Cinia',
  },
  {
    name: 'appgyver.svg',
    alt: 'AppGyver',
  },
  {
    name: 'codento.svg',
    alt: 'Codento',
  },
  {
    name: 'taito.svg',
    alt: 'Taito united',
  },
  {
    name: 'emblica.svg',
    alt: 'Emblica',
  },
  {
    name: 'kodan.svg',
    alt: 'Kodan',
  },
  {
    name: 'upcloud.svg',
    alt: 'UpCloud',
  },
  {
    name: 'perfektio.svg',
    alt: 'Perfektio',
  },
  {
    name: 'blok.svg',
    alt: 'Blok',
  },
  {
    name: 'gworks.svg',
    alt: 'G-Works',
  },
  {
    name: 'webscale.svg',
    alt: 'Webscale',
  },
  {
    name: 'siili.svg',
    alt: 'Siili',
  },
  {
    name: 'fmi.svg',
    alt: 'Ilmatieteenlaitos',
  },
  {
    name: 'futurice.svg',
    alt: 'Futurice',
  },
  {
    name: 'visma.svg',
    alt: 'Visma',
  },
  {
    name: 'platonic.svg',
    alt: 'Platonic Partnership',
  },
  {
    name: 'omnia.svg',
    alt: 'Omnia',
  },
  {
    name: 'tietotalo.svg',
    alt: 'Tietotalo',
  },
  {
    name: 'circles.svg',
    alt: 'Circles',
  },
  {
    name: 'nordcloud.svg',
    alt: 'Nordcloud',
  },
  {
    name: 'wunderdog.svg',
    alt: 'Wunderdog',
  },
  {
    name: 'gofore.svg',
    alt: 'Gofore',
  },
  {
    name: 'nortal.svg',
    alt: 'Nortal Oy',
  },
  {
    name: 'nursebuddy.svg',
    alt: 'NurseBuddy',
  },
  {
    name: 'wolt.svg',
    alt: 'Wolt',
  },
  {
    name: 'pori.svg',
    alt: 'Pori',
  },
  {
    name: 'motley.svg',
    alt: 'Motley',
  },
  {
    name: 'bonsky.svg',
    alt: 'Bonsky Digital',
  },
  {
    name: 'planbrothers.svg',
    alt: 'Plan Brothers',
  },
];

export const CompaniesBanner = ({ isFrontPage }) => (
  <Banner
    backgroundColor={isFrontPage && 'white'}
    className="spacing--after"
    id="challenge"
  >
    <Element className="container" flex>
      <BodyText
        centered
        className="col-4 push-right-3 challenge-title"
        text="Yhteistyössä"
      />
      <Element
        flex
        spaceBetween
        className="col-6 push-right-2 flex-fix-aligning space-between--mobile"
      >
        {partners.map((company, i) => (
          <ContentLiftup
            key={company.url}
            small
            companyPath={company.url}
            image={{
              src: require(`../../images/company_logos/${company.image.name}`),
              alt: company.image.alt,
            }}
            className={`col-3 col-5--mobile col-5--tablet`}
          />
        ))}
      </Element>

      {!isFrontPage && (
        <>
          <BodyText
            centered
            className="col-4 spacing push-right-3 challenge-title"
            text="Full stack -haasteessa mukana"
          />
          <Element
            flex
            className="col-9 flex-fix-aligning space-between--mobile"
          >
            {inChallenge.map(
              company =>
                company.name !== '' && (
                  <Image
                    key={company.name}
                    contain
                    src={require(`../../images/company_logos/${company.name}`)}
                    alt={company.alt}
                    className={`company__logo push-right-1 col-3--mobile col-3--tablet`}
                  />
                )
            )}
          </Element>
        </>
      )}

      {isFrontPage && (
        <Element flex spaceAround className="col-10 spacing">
          <Link className="about__challenge-button" to="/challenge">
            Lisätietoja haasteesta
          </Link>
        </Element>
      )}
    </Element>
  </Banner>
);

CompaniesBanner.defaultProps = {
  isFrontPage: false,
};

CompaniesBanner.propTypes = {
  isFrontPage: PropTypes.bool,
};
