const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

  _state : {

    profilePage: {
      postsData : [
        {id : 1 , message : "Hi ! How are you ?" ,  likesCount:5},
        {id : 2 , message : "It's my first message" ,  likesCount:15},
        {id : 3 , message : "My name is Igor Birkan" ,  likesCount:25},
        {id : 4 , message : "Test message ..." ,  likesCount:0}
      ],
      newPostText:""
    },

    dialogsPage : {
      dialogsData : [
        {id : 1 , name : "Adam" , avatar:"https://image.flaticon.com/icons/svg/145/145859.svg"},
        {id : 2 , name : "David" , avatar:"https://image.flaticon.com/icons/svg/163/163801.svg"},
        {id : 3 , name : "Steve" , avatar:"https://image.flaticon.com/icons/svg/163/163834.svg"},
        {id : 4 , name : "Kevin", avatar:"https://image.flaticon.com/icons/svg/145/145867.svg"},
        {id : 5 , name : "Kate", avatar:"https://image.flaticon.com/icons/svg/145/145862.svg"},
        {id : 6 , name : "Mary" , avatar:"https://image.flaticon.com/icons/svg/145/145852.svg"}
      ],
      messagesData : [
        {id : 1 , message : "Hi"},
        {id : 2 , message : "How are you ?!"},
        {id : 3 , message : "This is test message"}
      ],
      newMessageText:""
    },

    sideBar :{
      freinds :[
        {id : 1 , name : "Adam" , avatar:"https://image.flaticon.com/icons/svg/145/145859.svg"},
        {id : 2 , name : "David" , avatar:"https://image.flaticon.com/icons/svg/163/163801.svg"},
        {id : 3 , name : "Steve" , avatar:"https://image.flaticon.com/icons/svg/163/163834.svg"}
      ]
    }
  },

  _callSubscriber(){},

  getState(){
    return this._state;
  },

  subscribe(observer){
    this._callSubscriber=observer;
  },

  dispatch(action){
    switch (action.type){
      case ADD_POST :
        let maxPostId = 0;
        this._state.profilePage.postsData.forEach(post => {
          if (post.id > maxPostId) {
            maxPostId = post.id;
          }
        });
    
        let newPost = {
          id : maxPostId+1 ,
          message : this._state.profilePage.newPostText ,
          likesCount:0
        };
    
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state); 
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText=action.postText;
        this._callSubscriber(this._state); 
        break;
      case ADD_MESSAGE:
          let maxMessageId = 0;
          this._state.dialogsPage.messagesData.forEach(message => {
            if (message.id > maxMessageId) {
              maxMessageId = message.id;
            }
          });
      
          let newMessage = {
            id : maxMessageId+1 ,
            message : this._state.dialogsPage.newMessageText ,
            likesCount:0
          };
      
          this._state.dialogsPage.messagesData.push(newMessage);
          this._state.dialogsPage.newMessageText='';
          this._callSubscriber(this._state);        
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
          this._state.dialogsPage.newMessageText=action.messageText;
          this._callSubscriber(this._state);        
        break;
      default :
        break;
    }

  }

}

export const addPostActionCreator = () =>(
  { type :ADD_POST}
)

export const updateNewPostActionCreator = (postText)=>(
   {type : UPDATE_NEW_POST_TEXT , postText : postText }
)

export const addMessageActionCreator = () =>(
  { type :ADD_MESSAGE }
)

export const updateNewMessageActionCreator = (messageText)=>(
  {type : UPDATE_NEW_MESSAGE_TEXT , messageText : messageText }
)


export default store;

window.state = store; // for logging only !
