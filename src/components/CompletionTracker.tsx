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
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button className="completedBtn" onClick={toggleCompletion}>
                {isCompleted ? <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="checkmark">
                        <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    Completed
                </> : 'Mark Complete' }
            </button>
        </div>
    );
};

export default CompletionTracker;
