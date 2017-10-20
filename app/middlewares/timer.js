const timerMiddleware = store => next => action => {
    if (action.type === 'RAIL') {
        action.interval = setInterval(() => store.dispatch({ type: 'RANDOM' }), 1000);
    } else if (action.type === 'STOP_TIMER') {
        clearInterval(action.interval);
    }
    // next() passes an action to the next middleware, or to the reducer if
    // there's no next middleware
    next(action);
};

export default timerMiddleware;