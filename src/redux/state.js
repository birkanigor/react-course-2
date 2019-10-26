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

  getState(){
    return this._state;
  },

  _callSubscriber(){},

  addPost(){
    let maxId = 0;
    this._state.profilePage.postsData.forEach(post => {
      if (post.id > maxId) {
        maxId = post.id;
      }
    });

    let newPost = {
      id : maxId+1 ,
      message : this._state.profilePage.newPostText ,
      likesCount:0
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText='';
    this._callSubscriber(this._state);

  },

  updatePostTextArea(postText) {
    this._state.profilePage.newPostText=postText;
    this._callSubscriber(this._state);
  },

  addMessage() {

    let maxId = 0;
    this._state.dialogsPage.messagesData.forEach(message => {
      if (message.id > maxId) {
        maxId = message.id;
      }
    });

    let newPost = {
      id : maxId+1 ,
      message : this._state.dialogsPage.newMessageText ,
      likesCount:0
    };

    this._state.dialogsPage.messagesData.push(newPost);
    this._state.dialogsPage.newMessageText='';
    this._callSubscriber(this._state);
  },

  updateMessageTextArea(messageText) {
    this._state.dialogsPage.newMessageText=messageText;
    this._callSubscriber(this._state);
  },

  subscribe(observer){
    this._callSubscriber=observer;
  }

}

export default store;

window.state = store; // for logging only !
