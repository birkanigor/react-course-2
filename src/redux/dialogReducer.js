const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageText:"message 2 add"
}

const dialogReducer =(state = initialState , action) => {

    switch (action.type){        
        case ADD_MESSAGE:{

            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]

            let maxMessageId = 0;
            stateCopy.messagesData.forEach(message => {
                if (message.id > maxMessageId) {
                    maxMessageId = message.id;
                }
            });
        
            let newMessage = {
                id : maxMessageId+1 ,
                message : stateCopy.newMessageText ,
                likesCount:0
            };
        
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText='';
            return stateCopy;            
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state}
            stateCopy.newMessageText=action.messageText;
            return stateCopy;            
        }

        default :
            return state;
    }
  
    
}

export const addMessageActionCreator = () =>(  { type :ADD_MESSAGE })

export const updateNewMessageActionCreator = (messageText)=>({type : UPDATE_NEW_MESSAGE_TEXT , messageText : messageText })

export default dialogReducer; 