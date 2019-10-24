import {renderEntireTree} from '../render';
let state = {

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
    newMessageText:"igor"
  },

  sideBar :{
    freinds :[
      {id : 1 , name : "Adam" , avatar:"https://image.flaticon.com/icons/svg/145/145859.svg"},
      {id : 2 , name : "David" , avatar:"https://image.flaticon.com/icons/svg/163/163801.svg"},
      {id : 3 , name : "Steve" , avatar:"https://image.flaticon.com/icons/svg/163/163834.svg"}
    ]
  }
}

window.state=state; // for logging only !

export let addPost = () => {
  let maxId = 0;
  state.profilePage.postsData.forEach(post => {
    if (post.id > maxId) {
      maxId = post.id;
    }
  });

  let newPost = {
    id : maxId+1 ,
    message : state.profilePage.newPostText ,
    likesCount:0
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText='';
  renderEntireTree(state);

}

export let updatePostTextArea = (postText) => {
  state.profilePage.newPostText=postText;
  renderEntireTree(state);
}

export let addMessage = () =>{

  let maxId = 0;
  state.dialogsPage.messagesData.forEach(message => {
    if (message.id > maxId) {
      maxId = message.id;
    }
  });

  let newPost = {
    id : maxId+1 ,
    message : state.dialogsPage.newMessageText ,
    likesCount:0
  };

  state.dialogsPage.messagesData.push(newPost);
  state.dialogsPage.newMessageText='';
  renderEntireTree(state);
}

export let updateMessageTextArea = (messageText) => {
  state.dialogsPage.newMessageText=messageText;
  renderEntireTree(state);
}

export default state;
