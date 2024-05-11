import { useEffect, useState } from 'react';

const CompletionIndicator = ({ postId }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const completedPosts = JSON.parse(localStorage.getItem('completedPosts') || "[]");
        setIsCompleted(completedPosts.includes(postId));
    }, [postId]);

    return (
        <span>{isCompleted ? '✓' : ''}</span>
    );
};

export default CompletionIndicator;
