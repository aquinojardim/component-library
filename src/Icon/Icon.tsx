/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';
import { IconProps } from './Icon.types';
import './Icon.scss';
import Iconlogoknot from './svg/icon-logo-knot.svg';
import Iconlogotext from './svg/icon-logo-text.svg';
import Iconlogoheart from './svg/icon-logo-heart.svg';
import Iconlogonmhorizontal from './svg/icon-logo-nm-horizontal.svg';
import Iconlogonmstacked from './svg/icon-logo-nm-stacked.svg';
import Faiconbadgepercent from './svg/fa-icon-badge-percent.svg';
import Faiconbagsshopping from './svg/fa-icon-bags-shopping.svg';
import Faiconbars from './svg/fa-icon-bars.svg';
import Faiconboxheart from './svg/fa-icon-box-heart.svg';
import Faiconbrandfacebookf from './svg/fa-icon-brand-facebook-f.svg';
import Faiconbrandinstagram from './svg/fa-icon-brand-instagram.svg';
import Faiconbrandpinterest from './svg/fa-icon-brand-pinterest.svg';
import Faiconbrandtwitter from './svg/fa-icon-brand-twitter.svg';
import Faiconcalendaralt from './svg/fa-icon-calendar-alt.svg';
import Faiconcaretdown from './svg/fa-icon-caret-down.svg';
import Faiconcaretleft from './svg/fa-icon-caret-left.svg';
import Faiconcaretright from './svg/fa-icon-caret-right.svg';
import Faiconcaretup from './svg/fa-icon-caret-up.svg';
import Faiconchevrondown from './svg/fa-icon-chevron-down.svg';
import Faiconchevronleft from './svg/fa-icon-chevron-left.svg';
import Faiconchevronright from './svg/fa-icon-chevron-right.svg';
import Faiconchevronup from './svg/fa-icon-chevron-up.svg';
import Faiconclock from './svg/fa-icon-clock.svg';
import Faiconcommentalteditsolid from './svg/fa-icon-comment-alt-edit-solid.svg';
import Faiconcommentaltedit from './svg/fa-icon-comment-alt-edit.svg';
import Faiconcommentsolid from './svg/fa-icon-comment-solid.svg';
import Faiconcomment from './svg/fa-icon-comment.svg';
import Faiconcreditcard from './svg/fa-icon-credit-card.svg';
import Faiconenvelopeopendollar from './svg/fa-icon-envelope-open-dollar.svg';
import Faiconenvelopesolid from './svg/fa-icon-envelope-solid.svg';
import Faiconenvelope from './svg/fa-icon-envelope.svg';
import Faiconexclamationcircle from './svg/fa-icon-exclamation-circle.svg';
import Faiconexclamationcirclesolid from './svg/fa-icon-exclamation-circle-solid.svg';
import Faiconexclamationtrianglesolid from './svg/fa-icon-exclamation-triangle-solid.svg';
import Faiconexclamationtriangle from './svg/fa-icon-exclamation-triangle.svg';
import Faiconexternallink from './svg/fa-icon-external-link.svg';
import Faiconheartsolid from './svg/fa-icon-heart-solid.svg';
import Faiconheart from './svg/fa-icon-heart.svg';
import Faiconinfocirclesolid from './svg/fa-icon-info-circle-solid.svg';
import Faiconinfocircle from './svg/fa-icon-info-circle.svg';
import Faiconmapmarker from './svg/fa-icon-map-marker.svg';
import Faiconminuscirclesolid from './svg/fa-icon-minus-circle-solid.svg';
import Faiconminuscircle from './svg/fa-icon-minus-circle.svg';
import Faiconminus from './svg/fa-icon-minus.svg';
import Faiconphonesolid from './svg/fa-icon-phone-solid.svg';
import Faiconphone from './svg/fa-icon-phone.svg';
import Faiconpluscirclesolid from './svg/fa-icon-plus-circle-solid.svg';
import Faiconpluscircle from './svg/fa-icon-plus-circle.svg';
import Faiconplus from './svg/fa-icon-plus.svg';
import Faiconquestioncirclesolid from './svg/fa-icon-question-circle-solid.svg';
import Faiconquestioncircle from './svg/fa-icon-question-circle.svg';
import Faiconsearch from './svg/fa-icon-search.svg';
import Faiconsearchplus from './svg/fa-icon-searchplus.svg';
import Faiconshieldchecksolid from './svg/fa-icon-shield-check-solid.svg';
import Faiconshoppingbag from './svg/fa-icon-shopping-bag.svg';
import Faiconsquaresolid from './svg/fa-icon-square-solid.svg';
import Faiconsquare from './svg/fa-icon-square.svg';
import Faicontimescirclesolid from './svg/fa-icon-times-circle-solid.svg';
import Faicontimescircle from './svg/fa-icon-times-circle.svg';
import Faicontimes from './svg/fa-icon-times.svg';
import Iconapplepaylogo from './svg/icon-applepay-logo.svg';
import Iconccamex from './svg/icon-cc-amex.svg';
import Iconccapplepay from './svg/icon-cc-applepay.svg';
import Iconccdiscover from './svg/icon-cc-discover.svg';
import Iconccegift from './svg/icon-cc-egift.svg';
import Iconccmc from './svg/icon-cc-mc.svg';
import Iconccpaypal from './svg/icon-cc-paypal.svg';
import Iconccstorecredit from './svg/icon-cc-store-credit.svg';
import Iconccvisa from './svg/icon-cc-visa.svg';
import Iconpaypallogo from './svg/icon-paypal-logo.svg';

const Icon = (props: IconProps) => {
  const {
    name = 'icon-logo-knot',
    variant = 'primary',
    size = 'sm',
  } = props;

  const iconName = () => {
    switch (name) {
      case 'icon-logo-knot': return <Iconlogoknot className={`${variant} icon-${size}`} />;
      case 'icon-logo-text': return <Iconlogotext className={`${variant} icon-${size}`} />;
      case 'icon-logo-heart': return <Iconlogoheart className={`${variant} icon-${size}`} />;
      case 'icon-logo-nm-horizontal': return <Iconlogonmhorizontal className={`${variant} icon-${size}`} />;
      case 'icon-logo-nm-stacked': return <Iconlogonmstacked className={`${variant} icon-${size}`} />;
      case 'fa-icon-badge-percent': return <Faiconbadgepercent className={`${variant} icon-${size}`} />;
      case 'fa-icon-bags-shopping': return <Faiconbagsshopping className={`${variant} icon-${size}`} />;
      case 'fa-icon-bars': return <Faiconbars className={`${variant} icon-${size}`} />;
      case 'fa-icon-box-heart': return <Faiconboxheart className={`${variant} icon-${size}`} />;
      case 'fa-icon-brand-facebook-f': return <Faiconbrandfacebookf className={`${variant} icon-${size}`} />;
      case 'fa-icon-brand-instagram': return <Faiconbrandinstagram className={`${variant} icon-${size}`} />;
      case 'fa-icon-brand-pinterest': return <Faiconbrandpinterest className={`${variant} icon-${size}`} />;
      case 'fa-icon-brand-twitter': return <Faiconbrandtwitter className={`${variant} icon-${size}`} />;
      case 'fa-icon-calendar-alt': return <Faiconcalendaralt className={`${variant} icon-${size}`} />;
      case 'fa-icon-caret-down': return <Faiconcaretdown className={`${variant} icon-${size}`} />;
      case 'fa-icon-caret-left': return <Faiconcaretleft className={`${variant} icon-${size}`} />;
      case 'fa-icon-caret-right': return <Faiconcaretright className={`${variant} icon-${size}`} />;
      case 'fa-icon-caret-up': return <Faiconcaretup className={`${variant} icon-${size}`} />;
      case 'fa-icon-chevron-down': return <Faiconchevrondown className={`${variant} icon-${size}`} />;
      case 'fa-icon-chevron-left': return <Faiconchevronleft className={`${variant} icon-${size}`} />;
      case 'fa-icon-chevron-right': return <Faiconchevronright className={`${variant} icon-${size}`} />;
      case 'fa-icon-chevron-up': return <Faiconchevronup className={`${variant} icon-${size}`} />;
      case 'fa-icon-clock': return <Faiconclock className={`${variant} icon-${size}`} />;
      case 'fa-icon-comment-alt-edit-solid': return <Faiconcommentalteditsolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-comment-alt-edit': return <Faiconcommentaltedit className={`${variant} icon-${size}`} />;
      case 'fa-icon-comment-solid': return <Faiconcommentsolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-comment': return <Faiconcomment className={`${variant} icon-${size}`} />;
      case 'fa-icon-credit-card': return <Faiconcreditcard className={`${variant} icon-${size}`} />;
      case 'fa-icon-envelope-open-dollar': return <Faiconenvelopeopendollar className={`${variant} icon-${size}`} />;
      case 'fa-icon-envelope-solid': return <Faiconenvelopesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-envelope': return <Faiconenvelope className={`${variant} icon-${size}`} />;
      case 'fa-icon-exclamation-circle': return <Faiconexclamationcircle className={`${variant} icon-${size}`} />;
      case 'fa-icon-exclamation-circle-solid': return <Faiconexclamationcirclesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-exclamation-triangle-solid': return <Faiconexclamationtrianglesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-exclamation-triangle': return <Faiconexclamationtriangle className={`${variant} icon-${size}`} />;
      case 'fa-icon-external-link': return <Faiconexternallink className={`${variant} icon-${size}`} />;
      case 'fa-icon-heart-solid': return <Faiconheartsolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-heart': return <Faiconheart className={`${variant} icon-${size}`} />;
      case 'fa-icon-info-circle-solid': return <Faiconinfocirclesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-info-circle': return <Faiconinfocircle className={`${variant} icon-${size}`} />;
      case 'fa-icon-map-marker': return <Faiconmapmarker className={`${variant} icon-${size}`} />;
      case 'fa-icon-minus-circle-solid': return <Faiconminuscirclesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-minus-circle': return <Faiconminuscircle className={`${variant} icon-${size}`} />;
      case 'fa-icon-minus': return <Faiconminus className={`${variant} icon-${size}`} />;
      case 'fa-icon-phone-solid': return <Faiconphonesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-phone': return <Faiconphone className={`${variant} icon-${size}`} />;
      case 'fa-icon-plus-circle-solid': return <Faiconpluscirclesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-plus-circle': return <Faiconpluscircle className={`${variant} icon-${size}`} />;
      case 'fa-icon-plus': return <Faiconplus className={`${variant} icon-${size}`} />;
      case 'fa-icon-question-circle-solid': return <Faiconquestioncirclesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-question-circle': return <Faiconquestioncircle className={`${variant} icon-${size}`} />;
      case 'fa-icon-search': return <Faiconsearch className={`${variant} icon-${size}`} />;
      case 'fa-icon-searchplus': return <Faiconsearchplus className={`${variant} icon-${size}`} />;
      case 'fa-icon-shield-check-solid': return <Faiconshieldchecksolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-shopping-bag': return <Faiconshoppingbag className={`${variant} icon-${size}`} />;
      case 'fa-icon-square-solid': return <Faiconsquaresolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-square': return <Faiconsquare className={`${variant} icon-${size}`} />;
      case 'fa-icon-times-circle-solid': return <Faicontimescirclesolid className={`${variant} icon-${size}`} />;
      case 'fa-icon-times-circle': return <Faicontimescircle className={`${variant} icon-${size}`} />;
      case 'fa-icon-times': return <Faicontimes className={`${variant} icon-${size}`} />;
      case 'icon-applepay-logo': return <Iconapplepaylogo className={`${variant} icon-${size}`} />;
      case 'icon-cc-amex': return <Iconccamex className={`${variant} icon-${size}`} />;
      case 'icon-cc-applepay': return <Iconccapplepay className={`${variant} icon-${size}`} />;
      case 'icon-cc-discover': return <Iconccdiscover className={`${variant} icon-${size}`} />;
      case 'icon-cc-egift': return <Iconccegift className={`${variant} icon-${size}`} />;
      case 'icon-cc-mc': return <Iconccmc className={`${variant} icon-${size}`} />;
      case 'icon-cc-paypal': return <Iconccpaypal className={`${variant} icon-${size}`} />;
      case 'icon-cc-store-credit': return <Iconccstorecredit className={`${variant} icon-${size}`} />;
      case 'icon-cc-visa': return <Iconccvisa className={`${variant} icon-${size}`} />;
      case 'icon-paypal-logo': return <Iconpaypallogo className={`${variant} icon-${size}`} />;

      default: return <Iconlogoknot className={`${variant} icon-${size}`} />;
    }
  };

  return <div className='icon-margin'> {iconName()}</div>;

};

export default Icon;
