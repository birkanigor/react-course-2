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
        case ADD_POST :{
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]

            let maxPostId = 0;
            stateCopy.postsData.forEach(post => {
                if (post.id > maxPostId) {
                    maxPostId = post.id;
                }
            })

            let newPost = {
                id : maxPostId+1 ,
                message : stateCopy.newPostText ,
                likesCount:0
            };
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText='';          
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText=action.postText;          
            return stateCopy;            
        }

        default :
            return state;
    }
  
    
}

export const addPostActionCreator = () =>({ type :ADD_POST})

export const updateNewPostActionCreator = (postText)=>({type : UPDATE_NEW_POST_TEXT , postText : postText })

export default profileReducer;