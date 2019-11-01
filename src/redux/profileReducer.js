const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData : [
        {id : 1 , message : "Hi ! How are you ?" ,  likesCount:5},
        {id : 2 , message : "It's my first message" ,  likesCount:15},
        {id : 3 , message : "My name is Igor Birkan" ,  likesCount:25},
        {id : 4 , message : "Test message ..." ,  likesCount:0}
      ],
      newPostText:"text 2 add"
}

const profileReducer = (state = initialState , action) => {    
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
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.postText;          
            return state;
        default :
            return state;
    }
  
    
}

export const addPostActionCreator = () =>({ type :ADD_POST})

export const updateNewPostActionCreator = (postText)=>({type : UPDATE_NEW_POST_TEXT , postText : postText })

export default profileReducer;