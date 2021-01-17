import React from 'react';

const UserContext = React.createContext({
    userInfo: {
        userId: '234532'
    }
});
UserContext.displayName = 'UserContext';

export default UserContext;