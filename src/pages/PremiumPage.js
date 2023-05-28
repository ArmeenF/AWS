import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const PremiumPage = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>Hello, Welcome to my website</h1>
                    <h3>You are authenticated!! This is a premium content page!!</h3>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};

export default PremiumPage;