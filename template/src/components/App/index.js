import {connect, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {actionExample} from 'rdx/actions/example';
import {getPrettyExample} from 'rdx/selectors/example';
import PropTypes from 'prop-types';
import './index.scss';

const App = props => {
    const {example} = props;

    const dispatch = useDispatch();

    const [value, setValue] = useState(0);

    useEffect(() => {
        dispatch(actionExample(value));
    }, [dispatch, value]);

    const onClick = () => {
        setValue(v => v + 1);
    };

    return (
        <div className="app">
            <div>
                <span>v0.1.0</span>
            </div>
            <button onClick={onClick}>Click Me</button>
            <div>{example}</div>
        </div>
    );
};

App.propTypes = {
    example: PropTypes.string,
};

export const mapStateToProps = state => ({
    example: getPrettyExample(state),
});

export default connect(mapStateToProps)(App);
