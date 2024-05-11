import { useState, useEffect, type FC } from 'react';

type CompletionTrackerProps = {
    postId: string;
};

function getCompletedPosts(): Set<string> {
    try {
        const data = localStorage.getItem('completedPosts');
        return new Set(data ? JSON.parse(data) : []);
    } catch (error) {
        console.error('Failed to parse completed posts:', error);
        return new Set<string>();
    }
}

function saveCompletedPosts(newCompletedPosts: Set<string>) {
    try {
        localStorage.setItem('completedPosts', JSON.stringify([...newCompletedPosts]));
    } catch (error) {
        console.error('Failed to save completed posts:', error);
    }
}

const CompletionTracker: FC<CompletionTrackerProps> = ({ postId }) => {
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    useEffect(() => {
        const completedPosts = getCompletedPosts();
        setIsCompleted(completedPosts.has(postId));
    }, [postId]);

    const toggleCompletion = () => {
        const completedPosts = getCompletedPosts();
        if (completedPosts.has(postId)) {
            completedPosts.delete(postId);
            setIsCompleted(false);
        } else {
            completedPosts.add(postId);
            setIsCompleted(true);
        }

        saveCompletedPosts(completedPosts);
    };

    return (
        <button onClick={toggleCompletion}>
            {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
    );
};

export default CompletionTracker;
