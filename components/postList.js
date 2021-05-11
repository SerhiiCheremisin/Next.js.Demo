import React from 'react';

const PostList = ({list, counter}) => {

    return(
        <>
            {list.map((el,idx) => {
                if (idx === counter){
                    return(
                        <div key={el.id}>
                        <h2>{el.Title}</h2>
                        <h2>{el.Author}</h2>
                        <span>{el.Text.slice(0,50)}...</span>
                        <button>See more</button>
                        </div>
                    )
                }
            })}

        </>
    )

}

export default PostList;
