import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { TOAST_TIMEOUTS } from '../../helpers/constants';
import { removeToast } from '../../actions';

const Toast = ({
    id,
    message,
    type,
}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [timerId, setTimerId] = useState(null);

    const clearRemoveToastTimeout = () => clearTimeout(timerId);
    const removeCurrentToast = () => dispatch(removeToast(id));
    const setRemoveToastTimeout = () => {
        const timeout = TOAST_TIMEOUTS[type];
        const timerId = setTimeout(removeCurrentToast, timeout);

        setTimerId(timerId);
    };

    useEffect(() => {
        setRemoveToastTimeout();
    }, []);

    const { key, options } = message;

    return <div className={`toast toast--${type}`}
                onMouseOver={clearRemoveToastTimeout}
                onMouseOut={setRemoveToastTimeout}>
        <p className="toast__content">{t(key, options)}</p>
        <button className="toast__dismiss" onClick={removeCurrentToast}>
            <svg stroke="#fff" fill="none" width="20" height="20" strokeWidth="2"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m18 6-12 12" />
                <path d="m6 6 12 12" />
            </svg>
        </button>
    </div>;
};

Toast.propTypes = {
    id: PropTypes.string.isRequired,
    message: PropTypes.shape({
        key: PropTypes.string.isRequired,
        options: PropTypes.objectOf(PropTypes.string),
    }),
    type: PropTypes.string.isRequired,
};

export default Toast;
