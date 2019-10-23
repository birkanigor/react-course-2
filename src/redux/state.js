let state = {

  profilePage: {
    postsData : [
      {id : 1 , message : "Hi ! How are you ?" ,  likesCount:5},
      {id : 2 , message : "It's my first message" ,  likesCount:15},
      {id : 3 , message : "My name is Igor Birkan" ,  likesCount:25},
      {id : 4 , message : "Test message ..." ,  likesCount:0}
    ]
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
    ]
  },
  
  sideBar :{
    freinds :[
      {id : 1 , name : "Adam" , avatar:"https://image.flaticon.com/icons/svg/145/145859.svg"},
      {id : 2 , name : "David" , avatar:"https://image.flaticon.com/icons/svg/163/163801.svg"},
      {id : 3 , name : "Steve" , avatar:"https://image.flaticon.com/icons/svg/163/163834.svg"}
    ]
  }
}

export default state;
