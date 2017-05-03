/* eslint-disable */
import {
  Property as Kefir_Property,
  Stream as Kefir_Stream
} from 'kefir';
import * as P from 'prop-types';
import * as R from 'ramda';

const validateProp = type => (props, propName, componentName) => {
  const isValid = props[propName] instanceof type;
  if (!isValid) {
    return new Error(
      [
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`.`,
        `Prop \`${propName}\` must be of type \`${type.name}\``
      ].join(' ')
    )
  }
};

export const KefirProperty = validateProp(Kefir_Property);
export const KefirStream = validateProp(Kefir_Stream);

export const Primitive = [P.string, P.number, P.bool];

export const KaretValue = P.oneOfType([...Primitive, KefirProperty, KefirStream]);

export const Match = P.shape({
  url: P.string,
  params: P.object
});
