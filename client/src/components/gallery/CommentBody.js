import React from "react";

function CommentBody({ comment }) {
  return (
    <div>
      <div>
        <div className='commenteduser'>
          <p>{comment.userId.name}</p>
          <p>{comment.userId.lastname}</p>
        </div>
        <div className='commentandicon'>
          <p className='comments'>{comment.usercomment}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentBody;
