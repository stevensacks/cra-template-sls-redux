import {connect, useDispatch} from 'react-redux';
import {actionExample} from 'rdx/actions/example';
import {getPrettyExample} from 'rdx/selectors/example';
import PropTypes from 'prop-types';
import React from 'react';
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
            <header className="app-header">
                <div>
                    <span>v0.1.0</span>
                </div>
                <div>{example}</div>
                <button onClick={onClick}>
                    <span>Click Me</span>
                </button>
            </header>
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
