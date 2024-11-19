import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    useEffect(()=>{
        const storedLikeButton=localStorage.getItem('likeCount');
        const storedLiked=localStorage.getItem('liked')
        if(storedLikeButton){
            setLikeCount(parseInt(storedLikeButton));
        }
        if(storedLiked){
            setLiked(JSON.parse(storedLiked))
        }
    },[]);
    const handleClick = () => {
        const newLikeCount = liked ? likeCount - 1 : likeCount + 1;
        setLiked(!liked);
        setLikeCount(newLikeCount);
        // Store the updated like count in local storage
        localStorage.setItem('likeCount', newLikeCount.toString());
        localStorage.setItem('liked',JSON.stringify(!liked))
    };
    return (
        <div>
            <AiFillHeart
                color={liked ? "#e32636" : "grey"}
                size="35"
                onClick={handleClick}
                style={{ cursor: 'pointer'}}
            />
            <span className='text-white text-sm font-semibold'>{likeCount} Likes</span>
        </div>
    );
}

