const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer =(state,action) => {
    switch (action.type){        
        case ADD_MESSAGE:
            let maxMessageId = 0;
            state.messagesData.forEach(message => {
                if (message.id > maxMessageId) {
                maxMessageId = message.id;
                }
            });
        
            let newMessage = {
                id : maxMessageId+1 ,
                message : state.newMessageText ,
                likesCount:0
            };
        
            state.messagesData.push(newMessage);
            state.newMessageText='';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText=action.messageText;
            break;
        default :
            break;
    }
  
    return state;
}

export const addMessageActionCreator = () =>(  { type :ADD_MESSAGE })

export const updateNewMessageActionCreator = (messageText)=>({type : UPDATE_NEW_MESSAGE_TEXT , messageText : messageText })

export default dialogReducer; 