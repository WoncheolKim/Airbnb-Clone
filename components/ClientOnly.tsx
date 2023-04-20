'use client';

import { useState, useEffect } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMount, setHasMount] = useState(false);

    useEffect(() => {
    }, []);

    if (!hasMount) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}

export default ClientOnly;