const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state,action) => {

    switch (action.type){
        case ADD_POST :
            let maxPostId = 0;
            state.postsData.forEach(post => {
            if (post.id > maxPostId) {
                maxPostId = post.id;
            }
            });
        
            let newPost = {
            id : maxPostId+1 ,
            message : state.newPostText ,
            likesCount:0
            };
        
            state.postsData.push(newPost);
            state.newPostText='';          
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.postText;          
            break;
        default :
            break;
    }
  
    return state;
}

export const addPostActionCreator = () =>({ type :ADD_POST})

export const updateNewPostActionCreator = (postText)=>({type : UPDATE_NEW_POST_TEXT , postText : postText })

export default profileReducer;