import PropTypes from 'prop-types';

export const UUID = (props, propName, componentName) => {
    if (
        props[propName] &&
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
            props[propName]
        )
    ) {
        return new Error(
            `Invalid prop '${propName}' supplied to '${componentName}'. ${props[propName]}.`
        );
    }
};

export const UUIDArray = PropTypes.arrayOf(UUID);
