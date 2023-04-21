'use client';

import { useState, useEffect } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMount, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
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